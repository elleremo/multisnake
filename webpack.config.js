const path = require('path');
const LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {

    plugins: [
        new LiveReloadPlugin()
    ],

    entry: './src/js/index.js',
    mode: 'development',
    // module: {
    //     rules: [
    //         {
    //             test: /\.less$/,
    //             loader: 'less-loader', // compiles Less to CSS
    //             options: {
    //                 sourceMap: true,
    //             }
    //         },
    //     ],
    // },
    resolve: {
        extensions: [ '.js' ]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'inline-source-map',
    watch: true
};
