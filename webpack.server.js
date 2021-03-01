const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './server/index.js',

  target: 'node',

  externals: [nodeExternals()],

  output: {
    path: path.resolve('server-build'),
    filename: 'index.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,"@babel/preset-env": "^7.10.4",
        "@babel/preset-react": "^7.10.4",
        "babel-loader": "^8.1.0",
        use: 'babel-loader'
      }
    ]
  }
};
