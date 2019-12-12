# monaco-editor-esm-webpack-plugin

> It dependency on [monaco-editor-webpack-plugin](https://github.com/microsoft/monaco-editor-webpack-plugin).  
> If you want copy a monaco editor with localization, you can see [primefaces-monaco](https://github.com/blutorange/primefaces-monaco/blob/master/ESM-I18N.md)

The webpack's plugin for monaco editor to compile the worker and handle with localization.

## Installing

`npm install monaco-editor-esm-webpack-plugin --save-dev`

## Using

- `webpack.config.js`

    ```
    const MonacoWebpackPlugin = require('monaco-editor-esm-webpack-plugin');

    module.exports = {
        entry: './index.js',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'app.js'
        },
        module: {
            rules: [
                {
                    test: /\.js/,
                    enforce: 'pre',
                    include: /node_modules[\\\/]monaco-editor[\\\/]esm/,
                    use: MonacoWebpackPlugin.loader
                },
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader']
                }
            ]
        },
        plugins: [
            new MonacoWebpackPlugin()
        ]
    };
    ```

## Localization

- Install [monaco-editor-nls](https://github.com/wang12124468/monaco-editor-nls)

    `npm install monaco-editor-nls`

- Set the locale data in your code

    ```
    // index.js
    import { setLocaleData } from 'monaco-editor-nls';
    import zh_CN from 'monaco-editor-nls/locale/zh-hans';

    setLocaleData(zh_CN);

    // You must import/require after `setLocaleData`
    const monaco = require('monaco-editor/esm/vs/editor/editor.api');

    monaco.editor.create(document.getElementById('root'), { language: 'javascript' });
    ```

## Options

There only two options for this plugin. But you can the [monaco-editor-webpack-plugin's options](https://github.com/microsoft/monaco-editor-webpack-plugin#options) in the options.

- isMonacoEditorWebapckPlugin - whether [monaco-editor-webpack-plugin](https://github.com/microsoft/monaco-editor-webpack-plugin) is used. Default: `true`

- isReplaceNls - whether replace the nls file. Default: `true`


## Q & A

- Localization is not active ?  

    There are may two `monaco-editor-nls`. One is may in `monaco-editor-esm-webpack-plugin/node_modules`, another is may in `node_modules`. You should delete the one in `monaco-editor-esm-webpack-plugin/node_modules` and restart.
