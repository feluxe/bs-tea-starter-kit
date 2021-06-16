

const path = require('path');

module.exports = {
    entry: './src/Usage.bs.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: 'var',
        library: 'App'
    },
    mode: "development",

    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000
    }

};

