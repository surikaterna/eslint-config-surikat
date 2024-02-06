const shared = require('./shared');

module.exports = {
  ...shared,
  extends: [
    'airbnb/base',
    'airbnb-typescript/base',
    ...shared.extends
  ]
};
