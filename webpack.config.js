var webpack = require("webpack");

module.exports = {
  entry: {
    List: "./src/main.js"
  },
  output: {
    path: './dist',
    filename: "[name].js"
  },
  externals: {
    "react": "React"
  },
  resolve: {
    extensions: ['', '.js', '.json', '.jsx']
  },
  module: {
    loaders: [
      {test: /\.(?:js|jsx)$/, exclude: /node_modules/, loader: 'babel-loader'}    
    ]
  }
};
