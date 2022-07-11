module.exports = {
  extends: [
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:jest/recommended',
    'prettier',
  ],
  parserOptions: {
    project: './tsconfig.json'
  },
  parser: '@typescript-eslint/parser',
  rules: {
    '@typescript-eslint/comma-dangle': ['error', 'never'],
    'class-methods-use-this': 'off',
    'func-names': 'off',
    'linebreak-style': 'off',
    'lines-between-class-members': 'off',
    'max-len': ['error', {
      code: 160,
      tabWidth: 2
    }],
    'no-continue': 'off',
    'no-multi-spaces': ['warn', { exceptions: { VariableDeclarator: true } }],
    'no-plusplus': 'off',
    'no-underscore-dangle': 'off',
    'object-curly-newline': 'off',
    'prefer-destructuring': 'off',
    'prefer-object-spread': 'off',
  },
  env: {
    node: true,
    browser: true,
    jest: true,
    mocha: true
  }
}
