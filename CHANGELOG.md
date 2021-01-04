# Change Log

## 2.0.0

> 2020-01-04

### Feature

- Remove all dependencies to peerDependencies or devDependencies. And now, you should add dependencies in your project and you can match the version of `monaco-editor` with `monaco-editor-webpack-plugin` (such as, `monaco-editor#0.21.*` with `monaco-editor-webpack-plugin#2.*.*`)

## 1.1.0

> 2019-12-24

### Bug Fixes

- Fix the error that can't build monaco editor, which version >= 1.9.0. Now it only use for monaco editor(version <= 1.8.1)

## 1.0.3

> 2019-12-12

### Bug Fixes

- Fix the demo in `README.md` is not correct.

    ```
    import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';
    import { setLocaleData } from 'monaco-editor-nls';
    import zh_CN from 'monaco-editor-nls/locale/zh-hans';

    setLocaleData(zh_CN);

    monaco.editor.create(document.getElementById('container'), { language: 'javascript' });
    ```
    to
    ```
    // index.js
    import { setLocaleData } from 'monaco-editor-nls';
    import zh_CN from 'monaco-editor-nls/locale/zh-hans';

    setLocaleData(zh_CN);

    // You must import/require after `setLocaleData`
    const monaco = require('monaco-editor/esm/vs/editor/editor.api');

    monaco.editor.create(document.getElementById('root'), { language: 'javascript' });
    ```

## 1.0.2

> 2019-10-25

### Bug Fixes

- Replace `monaco-editor-nls`'s version (1.0.0) to 1.0.2, because it not support `es5`.
