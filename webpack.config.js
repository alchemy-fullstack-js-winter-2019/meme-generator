const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

// eslint-disable-next-line no-undef
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.[hash].js'
    },
    devServer: {
        port:7890
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                        plugins: ['@babel/plugin-proposal-class-properties'],
                        cacheDirectory: true
                    }
                }
            },
            {
                test: /\.(jpeg|jpg|png|svg)$/,
                use: {
                    loader: 'url-loader',
                    options: { limit: 1000 }
                }
            },
            {
                test: /\.css$/,
                use: [{
                    loader: 'style-loader',
                    options: { sourceMap: true }
                },
                { 
                    loader: 'css-loader',
                    options: {
                        sourceMap: true,
                        modules: true,
                        importLoaders: 1
                    }
                },
                { 
                    loader: 'postcss-loader',
                    options: {
                        sourceMap: true,
                        plugins: [
                            require('autoprefixer')(),
                            require('postcss-nested')()
                        ]
                    }
                }]
                
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './src/index.html' }),

        new CleanWebpackPlugin('./dist')
    ]
};