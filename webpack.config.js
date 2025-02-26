const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/timer.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.scss$/, // Procesar archivos SCSS
        use: ['style-loader', 'css-loader', 'sass-loader'], // Cargar y compilar SCSS
      },
      {
        test: /\.js$/, // Procesar archivos JavaScript
        exclude: /node_modules/,
        use: 'babel-loader', 
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'], // Resolución de extensiones
  },
};