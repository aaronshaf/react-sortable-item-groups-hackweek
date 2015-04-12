module.exports = {
  entry: {
    'example/bundle': [
      'babel/polyfill',
      './example/example'
    ]
  },

  output: {
    filename: "[name].js"
  },

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
      { test: /\.css$/, loader: "style-loader!css-loader" }
    ]
  }
}
