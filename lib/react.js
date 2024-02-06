const shared = require('./shared');

module.exports = {
  ...shared,
  extends: [
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    ...shared.extends
  ]
};
