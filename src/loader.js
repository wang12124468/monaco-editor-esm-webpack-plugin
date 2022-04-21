module.exports = function(content, map, meta) {
    if(/monaco-editor[\\\/]esm[\\\/]vs.+\.js$/.test(this.resourcePath)) {
        const vsPath = this.resourcePath.split(/monaco-editor[\\\/]esm[\\\/]/).pop();
        if(vsPath) {
            const path = vsPath.replace(/\\/g, '/').replace('.js', '');
            // return content.replace(/localize\(/g, `localize('${path}', `);
            return content.replace(/(\bfunction\s+localize\()|(\blocalize\()/g, function(text) {
                if(/function\s+localize/.test(text)) {
                    return text;
                }
                return `localize('${path}', `;
            });
        }
    }
    return content;
}