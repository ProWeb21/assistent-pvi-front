const path = require("path");

module.exports = () => ({ 

  devServer: {
    contentBase: path.join(__dirname, "dist"),
    index: "index.html",
    hot: true,
    port: 9000,
    publicPath: "/js/"
  },
  entry: './src/modules/postpone.js',
  output:
  { 
    filename: 'postpone.js',
    path: path.resolve(__dirname,"dist/js"),
  },
  target: "web"  
})