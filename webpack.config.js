const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const HTML_WEBPACK_PLUGUIN_INDEX_OPTIONS = {
  template: path.resolve(__dirname,"src/templates/app.html"),
  filename: path.resolve(__dirname,"dist/index.html"),
  inject: "body",      
  minify: false
}

const MECP_OPTIONS = {
  publicPath: "/assets/css",
  filename: "assets/css/styles.css",
  hmr: true,
  // if hmr does not work, this is a forceful method.
  reloadAll: true,
}

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
    noParse: /^(vue|vue-router|vuex|vuex-router-sync)$/,    
    rules:[     
      {
        test: /\.s?[ac]ss$/,
        use: [MiniCssExtractPlugin.loader,"css-loader","sass-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|webp)(\?.*)?$/,
        use: [

          {
            loader: 'url-loader',
            options: {
              limit: 4096,
              fallback: {
                loader: 'file-loader',
                options: {
                  name: 'img/[name].[ext]',// 'img/[name].[hash:8].[ext]'
                  esModule:false,
                }
              }
            }
          }
        ]      
      }
    ]
  },
  output:
  { 
    filename: 'js/[name].js',
    path: path.resolve(__dirname,"dist"),
  },
  plugins: [
    new HtmlWebpackPlugin(HTML_WEBPACK_PLUGUIN_INDEX_OPTIONS),
    new MiniCssExtractPlugin(MECP_OPTIONS),
  ],
  resolve: {
    enforceExtension: false,
    alias: {
      '@': path.resolve(__dirname,'src'),
      '@assets': path.resolve(__dirname,'src/assets'),
      '@templates': path.resolve(__dirname,'src/templates'),
      '@partials': path.resolve(__dirname,'src/templates/partials'),
      '@css': path.resolve(__dirname,'src/assets/css'),
      '@modules': path.resolve(__dirname,'src/modules'),
      '@lib': path.resolve(__dirname,'src/lib'),
      //'@lib': [path.resolve(__dirname,'src/lib'), path.resolve(__dirname,'src/modules')]
      // reserved for webpack 5 when adopted
    },
  },
  target: "web"  
})

module.exports.HTML_WEBPACK_PLUGUIN_INDEX_OPTIONS = HTML_WEBPACK_PLUGUIN_INDEX_OPTIONS
module.exports.MECP_OPTIONS = MECP_OPTIONS