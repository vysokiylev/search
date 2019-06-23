const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const dotenv = require('dotenv');
const webpack = require('webpack');

dotenv.config();

module.exports = {
  output: {
    filename: '[name].[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.(otf|ttf|woff|woff2|mp3)$/,
        loader: 'file-loader'
      },
      {
        test: /\.(svg|png|jpg|jpeg|gif|cur)$/,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: false,
                quality: 100
              },
              optipng: {
                enabled: false
              },
              pngquant: {
                quality: '65-90',
                speed: 4
              },
              gifsicle: {
                interlaced: false
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.API_URL': JSON.stringify(process.env.API_URL)
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, `./web/src/index.html`),
      //favicon: path.join(__dirname, "./src/web/favicon.ico"),
      filename: 'index.html',
      inject: 'body'
    })
  ]
};
