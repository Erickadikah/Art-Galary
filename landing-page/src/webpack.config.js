const path = require('path');

module.exports = {
  // other configuration options
  resolve: {
    fallback: {
      "crypto": require.resolve("crypto-browserify"),
    }
  },
};
