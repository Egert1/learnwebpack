const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const glob = require('glob');

glob('./src/views/*.html', (error, files) => {
  if(error){
    console.log(error);
  }
  console.log(files);
})

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader,"css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html'
      }),
      new HtmlWebpackPlugin({
        filename: 'about.html',
        template: './src/about.html'
      }),
      new HtmlWebpackPlugin({
        filename: 'contacts.html',
        template: './src/contacts.html'
      }),
      new MiniCssExtractPlugin(),
    ],
};