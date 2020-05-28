const path = require("path");
// This constant will hold the webpack.config.js file configuration settings
// in order to reuse them here, in this vue config file
const webpack_config_import = require("./webpack.config");
const webpack_config = webpack_config_import();
const HTML_WEBPACK_PLUGUIN_INDEX_OPTIONS = webpack_config_import.HTML_WEBPACK_PLUGUIN_INDEX_OPTIONS
const MECP_OPTIONS = webpack_config_import.MECP_OPTIONS

// This settings are described in https://cli.vuejs.org/config

module.exports = {
  publicPath: webpack_config.devServer.publicPath,
  outputDir: webpack_config.output.path,
  indexPath: webpack_config.devServer.index,
  filenameHashing: false, //TODO  set to true when delivering releases
  pages:{
      index: {
        entry: webpack_config.entry.index,
        template: HTML_WEBPACK_PLUGUIN_INDEX_OPTIONS.template, //path.resolve(__dirname,"src/templates/app.html"),
        filename: HTML_WEBPACK_PLUGUIN_INDEX_OPTIONS.filename  //path.resolve(__dirname,"dist/index.html"),
      }
  },
  lintOnSave: true, // may require installing @vue/cli-plugin-eslint
  runtimeCompiler: false, // requires adding runtime.compiler <script> tag in app.html
  transpileDependencies: [], // TODO: test which dependencies are not supported withoub being transpiled
  productionSourceMap: false,
  //crossorigin:,
  integrity: false,
  configureWebpack: {
    target: webpack_config.target,
    output: webpack_config.output,
  }, // TODO: Pending to introduce settings from webpack.config.js
  chainWebpack: config => { // use it in the future, instead of configureWebpack
    config.module
      .rule('images').use('url-loader')
      .tap(options => {
        options.fallback.options.esModule= false
        return options
      })
  },
  css:{
    requireModuleExtension: true,
    extract: MECP_OPTIONS, // options form MCEP (mini-css-extract-plugin)
                           // not recommended for production
                           // @see https://cli.vuejs.org/config/#css-extract
    sourceMap: false,
    loaderOptions: { //@see https://cli.vuejs.org/config/#css-loaderoptions
      //css:{},     // TODO: Pending
      //postcss: {}, // TODO: Pending
    },
  },
  devServer: webpack_config.devServer,
  //pwa : {}, // @see https://cli.vuejs.org/config/#pwa
  // pluginOptions: {}, // https://cli.vuejs.org/config/#pluginoptions

}