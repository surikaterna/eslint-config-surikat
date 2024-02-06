const shared = reuqire('./shared');

module.exports = {
  ...shared,
  extends: [
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    ...shared.extends
  ]
};
