module.exports = {
  extends: 'airbnb/base',
  parser: 'babel-eslint',
  rules: {
    'no-continue': 'off',
    'object-curly-newline': 'off',
    'lines-between-class-members': 'off',
    'no-underscore-dangle': 'off',
    'prefer-object-spread': 'off',
    'no-plusplus': 'off',
    'import/no-unresolved': 'off',
    'linebreak-style': 'off',
    'import/extensions': 'off',
    'class-methods-use-this': 'off',
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
