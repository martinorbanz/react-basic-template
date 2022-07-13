const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

function getMode() {
  if (
    process.argv.length > 2 &&
    (process.argv[2] === 'development' || process.argv[2] === 'production')
  ) {
    return process.argv[2];
  }
  if (process.env.WEBPACK_MODE) {
    return process.env.WEBPACK_MODE;
  }
  return 'production';
}

const output = {
  path: path.resolve(__dirname, './dist'),
  filename: 'main.bundle.js',
};

const devServer = {
  static: path.resolve(__dirname, './public'),
  port: 3000,
  compress: true,
  open: true,
};

const plugins = [
  new HtmlWebpackPlugin({
    template: './public/index.html',
  }),
];

const rules = [
  {
    test: /(.js|.jsx|ts|tsx)/,
    use: 'babel-loader',
  },
];

const resolve = {
  extensions: ['.ts', '.tsx', '.js', '.jsx']
}

module.exports = {
  mode: getMode(),
  entry: './src/index.tsx',
  devServer,
  devtool: 'eval-source-map',
  output,
  plugins,
  module: {
    rules,
  },
  resolve
};
