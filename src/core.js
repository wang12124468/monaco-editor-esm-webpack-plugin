const MonacoEditorWebapckPlugin = require('monaco-editor-webpack-plugin');
const NormalModuleWebpackReplacementPlugin = require("webpack/lib/NormalModuleReplacementPlugin");
const nls = require.resolve('monaco-editor-nls/nls.js');

function MonacoEditorEsmWebpackPlugin({ isMonacoEditorWebapckPlugin = true, ...options }) {
    if(isMonacoEditorWebapckPlugin) {
        this.plugin1 = new MonacoEditorWebapckPlugin(options);
    }
    this.plugin2 = new NormalModuleWebpackReplacementPlugin(/\/(vscode\-)?nls\.js/, function(resource) {
        resource.request = nls;
        resource.resource = nls;
    });
}

MonacoEditorEsmWebpackPlugin.prototype.apply = function(compiler) {
    this.plugin1 && this.plugin1.apply(compiler);
    this.plugin2.apply(compiler);
}