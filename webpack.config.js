const path = require('path');

module.exports = {
  mode: 'development', //process.env.NODE_ENV,
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, './dist'),
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  devServer: {
    // static: {
    //   directory: path.join(__dirname, 'src'),
    //   publicPath: './dist',
    // },
    hot: true,
    publicPath: '/dist/',
    compress: true,
    port: 8080,
    proxy: {
      '/**': { target: 'http://localhost:3000' },
    },
  },
};
