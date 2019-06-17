const path = require('path')
const webpack = require('webpack')

module.exports = {
    mode: 'development',
    entry: {
        vendor: ['react', 'react-dom'],
        app: './index.js'
    },
    output: {
        path: path.resolve(__dirname, './dest'),
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/react',
                            '@babel/preset-env'
                        ]
                    }
                }
            }
        ]
    },
    plugins: [
        new webpack.SourceMapDevToolPlugin({})
    ]
}