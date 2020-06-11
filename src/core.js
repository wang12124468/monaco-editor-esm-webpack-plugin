const MonacoEditorWebapckPlugin = require('monaco-editor-webpack-plugin');
const NormalModuleWebpackReplacementPlugin = require("webpack/lib/NormalModuleReplacementPlugin");
const nls = require.resolve('monaco-editor-nls');

function MonacoEditorEsmWebpackPlugin({ isMonacoEditorWebapckPlugin = true, isReplaceNls = true, lng = 'ja', ...options } = {}) {
    if(isMonacoEditorWebapckPlugin) {
        this.plugin1 = new MonacoEditorWebapckPlugin(options);
    }
    if(isReplaceNls) {
        this.plugin2 = new NormalModuleWebpackReplacementPlugin(/\/(vscode\-)?nls\.js/, function(resource) {
            resource.request = nls;
            resource.resource = nls;
        });

        if(!lng) { return; }

        if (typeof lng === 'string') {
            // Try to get locale from monaco-editor-nls
            const _lng = /\.json$/.test(lng) ? lng : `${lng}.json`;
            try {
                const locale = require(require.resolve(`monaco-editor-nls/locale/${_lng}`));
                require('monaco-editor-nls').setLocaleData(locale);
            } catch (error) {
                console.error('Monaco Editor ESM Webpack Plugin Error:', error);
            }

            return;
        }

        require('monaco-editor-nls').setLocaleData(lng);
    }
}

MonacoEditorEsmWebpackPlugin.prototype.apply = function(compiler) {
    this.plugin1 && this.plugin1.apply(compiler);
    this.plugin2 && this.plugin2.apply(compiler);
}

MonacoEditorEsmWebpackPlugin.loader = require.resolve('./loader');

module.exports = MonacoEditorEsmWebpackPlugin;