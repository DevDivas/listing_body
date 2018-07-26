const path = require('path');
const webpack = require('webpack');

const ENTRY = path.join(__dirname, 'client', 'index.jsx');

const OUTPUT = {
  path: path.resolve(__dirname, 'public'),
  filename: 'bundle.js',
};

const LOADERS = {
  rules: [
    {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      options: {
        presets: ['env', 'react', 'airbnb'],
      },
    },
  ],
};

module.exports = {
  context: path.resolve(__dirname, 'client'),
  entry: ENTRY,
  output: OUTPUT,
  module: LOADERS,
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
