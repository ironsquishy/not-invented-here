
module.exports = {
  module:{
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  },
  entry: './app/index.js',
  output: {
    filename: './app/dist/bundle.js'
  }
};
