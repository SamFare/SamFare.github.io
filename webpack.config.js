var path = require("path");
var webpack = require("webpack");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");


var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: "./src/app/app.js",
  output: {
    filename: "build/app.bundle.js"
  },
  module: {

    rules: [   
      {
        test: /\.js$/,
        loader: "babel-loader",
        query: {
          plugins: ["recharts"],
          presets: ["@babel/env", "@babel/react"]
        }
      },
      {
        test: /\.css$/,
        loader: "style-loader"
      }, {
        test: /\.css$/,
        loader: "css-loader",
        query: {
          modules: true,
          localIdentName: "[name]__[local]___[hash:base64:5]"
        }
      },
      {
        test: /\.(scss)$/,
        use: [{
          loader: "style-loader", // inject CSS to page
        }, {
          loader: "css-loader", // translates CSS into CommonJS modules
        }, {
          loader: "postcss-loader", // Run post css actions
          options: {
            plugins: function () { // post css plugins, can be exported to postcss.config.js
              return [
                require("precss"),
                require("autoprefixer")
              ];
            }
          }
        }, {
          loader: "sass-loader" // compiles Sass to CSS
        }]
      },
    ]
  },
  stats: {
    colors: true
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        uglifyOptions: {
          compress: false,
          ecma: 6,
          mangle: true
        },
        sourceMap: true
      })
    ]
  },
  devtool: "source-map"
};
