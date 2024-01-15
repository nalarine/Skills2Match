// config-overrides.js
const path = require('path');

module.exports = function override(config, env) {
  // Add the following lines to the webpack configuration
  config.module.rules[1].oneOf.forEach(rule => {
    if (rule.test && rule.test.toString().includes('scss')) {
      rule.use.push({
        loader: require.resolve('resolve-url-loader'),
        options: {
          sourceMap: true,
          root: path.resolve(__dirname, 'src'),
        },
      });
    }
  });

  return config;
};
