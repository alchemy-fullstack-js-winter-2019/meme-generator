const HtmlPlugin = require('html-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');

/* eslint-disable-next-line no-undef */
module.exports = {
  entry: './src/index.js', 
  output: {
    filename: 'bundle.[hash].js'
  },
  devServer: {
    port: 7890
  },
  plugins: [
    new HtmlPlugin({ template: './src/index.html' }),
    new CleanPlugin('./dist')
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use:{
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-proposal-class-properties'],
            cacheDirectory: true
          }
        }
      },
      {
        test: /\.css$/,
        use: {
          loader: 'style-loader',
          options: { sourceMap: true }
        }
      },
      {
        test: /\.(jpg|png|svg)$/,
        use: {
          loader: 'url-loader',
          options: { limit: 1000 }
        }
      }
    ]
  }
};
