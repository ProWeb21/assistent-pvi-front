const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = () => ({ 

  devServer: {
    contentBase: path.join(__dirname, "./dist"),
    index: "index.html",
    hot: false,
    liveReload: true,
    port: 9000,
    publicPath: "/",
    watchContentBase: true,
    writeToDisk: true
  },
  devtool: "source-map",
  entry: {
    index:'./src/main.js'
  },
  mode: 'development',
  module:{
    rules:[     
      {
        test: /\.s?[ac]ss$/,
        use: [MiniCssExtractPlugin.loader,"css-loader","sass-loader"],
      },

    ]
  },
  output:
  { 
    filename: 'js/[name].js',
    path: path.resolve(__dirname,"dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname,"src/templates/app.html"),
      filename: path.resolve(__dirname,"dist/index.html"),
      inject: "body",      
      minify: false
    }),
    new MiniCssExtractPlugin({
      publicPath: "/assets/css",
      filename: "../assets/css/styles.css",
      hmr: true,
      // if hmr does not work, this is a forceful method.
      reloadAll: true,
    }), 

  ],
  
  target: "web"  
})