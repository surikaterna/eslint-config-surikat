const shared = reuqire('./shared');

module.exports = {
  ...shared,
  extends: [
    'airbnb/base',
    'airbnb-typescript/base',
    ...shared.extends
  ]
};
