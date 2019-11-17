const path = require('path');

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.less$/,
    use: [
      'style-loader',
      'css-loader',
      {
        loader: 'px2rem-loader',
        options: {
          remUnit: 200,
        },
      },
      {
        loader: 'less-loader',
        options: {
          sourceMap: true,
          javascriptEnabled: true,
          paths: [path.resolve(__dirname, 'node_modules')],
        },
      },
    ],
    include: path.resolve(__dirname, '../'),
  });
  return config;
};
