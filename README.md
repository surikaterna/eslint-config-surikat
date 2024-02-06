ESLint Config Surikat
=====================

Surikat's ESLint rules, including rules for TypeScript & React.

# Setup

Install as a dev dependency. ESLint and other necessary dependencies will be included.

```shell
npm i -D eslint-config-surikat
```

Add an `.eslintrc` file:

```shell
npx eslint --init
```

Extend in your `.eslintrc` file. This is in general all your config file should need:

```json
{
  "extends": "surikat"
}
```

For React applications, use the React specific config, including lint rules for React and hooks.

```json
{
  "extends": "surikat/react"
}
```

In some cases, such as when having code in a monorepo, the ESLint config will be merged with configuration files in
parent directories. To prevent this and only use this config, specify that the configuration file is a root file.

```json
{
  "extends": "surikat",
  "root": true
}
```

# Install Necessary Extensions

For VSCode, install the official [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
extension.

For JetBrains based IDE:s such as IntelliJ, WebStorm & GoLand, support should be included out of the box.

# Use

You should already get support from your code editor / IDE. Add a `lint` script to your `package.json
to enable support for linting through the CI as well.

```json
{
  "scripts": {
    "lint": "eslint . --ext .js,.jsx,.ts,.tsx"
  }
}
```
