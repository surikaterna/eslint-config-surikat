module.exports = {
  extends: 'airbnb/legacy',
  rules: {
    'func-names': 0,
    'no-multi-spaces': [1, { exceptions: { VariableDeclarator: true } }],
    'vars-on-top': 0,
    'comma-dangle': ['error', 'never'],
    'max-len': ['error', 160, 2]
  },
  globals: {
    describe: true,
    beforeEach: true,
    it: true,
    be: true
  },
  env: {
    node: true,
    mocha: true
  }
};
