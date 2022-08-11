module.exports = {
  extends: [
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'eslint:recommended',
    'plugin:promise/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier'
  ],
  parserOptions: {
    project: './tsconfig.json'
  },
  plugins: [
    '@typescript-eslint'
  ],
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
    '@typescript-eslint/no-unsafe-assignment': 'warn',
    '@typescript-eslint/no-unsafe-call': 'warn',
    '@typescript-eslint/no-unsafe-member-access': 'warn'
  },
  "overrides": [
    {
      "files": ["*.ts", "*.tsx"],
      "rules": {
        "no-undef": "off"
      }
    },
    {
      "files": ["*.(spec|test).[jt]sx?"],
      "plugins": ["jest"],
      "extends": [
        'plugin:jest/recommended',
        'plugin:jest/style'
      ]
    }
  ],
  env: {
    node: true,
    browser: true,
    'jest/globals': true,
    mocha: true
  }
}
