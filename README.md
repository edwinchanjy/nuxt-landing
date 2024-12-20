# Prerequisite
To begin running/developing the project, you will need to install the correct Node.js and bun version.

You can find the version for both of them under package.json 'engines'.

# Installing Node.js

The current version of Node.js can be acquired from package.json (currently 20.14.0).
It is recommended to install nvm (node version manager) for ease of switching Node.js environment.

To install nvm (node version manager):

```bash
# linux
sudo apt install curl
curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash

# windows
### Install the .exe file of the latest release from this link
https://github.com/coreybutler/nvm-windows/releases
```

To install the required version of Node.js:

```bash
# linux
nvm install your-node-version

# windows
nvm install your-node-version

# check your node version
node --version
```

# Installing bun

The current version of bun can be acquired from package.json (currently 1.22.22).

To install the required version of bun:

```bash
Refer to this documentation to install bun on your OS accordingly

https://bun.sh/docs/installation

# check your bun version
bun --version
```

# Installing ESLint

#### Packages:

1. Install the following packages by running the commands accordingly.

```bash
# ESLint
bun add --dev eslint

# @nuxt/eslint-config
bun add --dev @nuxt/eslint-config
```

#### Configuration:

1. Create a file named .eslint.config.mjs in the root folder.
2. Add the following rules to your ESLint configuration (.eslint.config.mjs):

```bash
// .eslint.config.mjs

// @ts-check
import { createConfigForNuxt } from '@nuxt/eslint-config/flat'

// Run `npx @eslint/config-inspector` to inspect the resolved config interactively
export default createConfigForNuxt({
  features: {
    // Rules for module authors
    tooling: true,
    // Rules for formatting
    stylistic: true,
  },
})

Note: This is the default config, you can always update the rules accordingly to the needs.
```

#### Scripts:

1. Adding scripts into package.json so it is easier to run the command

```bash
// package.json
{
"scripts":  {
	  "lint": "eslint .",
    "lintfix": "eslint --fix ."
	}
}
```

#### Usage:

1. Run the following command to check for errors with ESLint.

```bash
# lint
bun lint
```

2. Run the following command to fix the errors. Some warnings/errors might require developer to manually fix.

```bash
# lintfix
bun lintfix
```

3. If all the errors are fixed, running the command again should return success.

```bash
bun lint

bun run v1.22.22
$ eslint .
Done in 1.30s.
```

# Installing @nuxtjs/i18n
Follow the instructions in https://i18n.nuxtjs.org/docs/getting-started

# Configuring Editor
In order to maintain the same code structure and format for everyone, it is important to have the same settings.

Here are some settings template that can get you started.

#### This will prompt the user to install the recommended extensions whenever they open up VSCode. The extensions in the "recommendations" list is the ESLint that will be used together with the ESLint we just setup previously.
```bash
//  .vscode/extensions.json
{
	// See https://go.microsoft.com/fwlink/?LinkId=827846 to learn about workspace recommendations.
	// Extension identifier format: ${publisher}.${name}. Example: vscode.csharp
	// List of extensions which should be recommended for users of this workspace.
	"recommendations": [
		"dbaeumer.vscode-eslint"
	],
	// List of extensions recommended by VS Code that should not be recommended for users of this workspace.
	"unwantedRecommendations": []
}
```

#### These are the settings of the formatter

```bash
//  .vscode/settings.json
{
    "eslint.useFlatConfig": true,
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": "explicit"
    },
    "eslint.validate": [
        "javascript",
        "typescript"
    ],
}
```

#### These are the config for editor
```bash
//  .editorconfig
root = true

[*]
indent_size = 2
indent_style = space
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true

[*.md]
trim_trailing_whitespace = false

```

#### REMEMBER! These are customizable and you can always change them to suit the team needs.

# Nuxt 3 Setup

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

#### Setup

Make sure to install the dependencies:

```bash
bun  install
```

#### Development Server

Start the development server on `http://localhost:3000`:

```bash
bun dev

OR

bun dev -o // to open the tab automatically
```

#### Production

Build the application for production:

```bash
bun build
```

#### Locally preview production build:

```bash
bun preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

# Adding Unit Test & End-to-End Test

Vitest is used to run all these tests.
Read more about Vitest here: https://nuxt.com/docs/getting-started/testing

#### Adding test commands

After Vitest is fully set up, you can add these commands package.json.

```
// package.json

{
  ...
  "scripts": {
    ...
    "test": "vitest run --coverage",
    "test:precommit": "vitest run --changed"
  },
  ...
}

```

#### Running tests

To run the tests, simply run this command in your terminal:

```bash
bun test
```

If you only want to run a single test file, you can run this command instead:

```bash
bun test <path-to-your-test-file>
```

# Adding Tailwindcss

Tailwindcss is the preferred way to handle css, but is totally optional. If you would like to use it, you can install it following the steps here: https://tailwindcss.com/docs/guides/nuxtjs#standard

#### Adding ESLint rules for Tailwindcss

To add the rules, you need to first install the package 

```
bun add --dev eslint-plugin-tailwindcss
```

Then you need to manually add the rules in the eslint.config.mjs
```
// eslint.config.mjs

// @ts-expect-error missing types
import tailwindcss from 'eslint-plugin-tailwindcss' // ADD THIS

...
export default createConfigForNuxt({
  ...
}).append( // ADD THIS PART (append)
  {
    files: ['**/*.vue'],
    name: 'local/tailwindcss',
    plugins: {
      tailwindcss,
    },
    rules: {
      'tailwindcss/classnames-order': 'warn',
      'tailwindcss/enforces-negative-arbitrary-values': 'warn',
      'tailwindcss/enforces-shorthand': 'warn',
      'tailwindcss/no-arbitrary-value': 'warn',
      'tailwindcss/no-contradicting-classname': 'warn',
      'tailwindcss/no-custom-classname': 'error',
      'tailwindcss/no-unnecessary-arbitrary-value': 'warn',
    },
  },
)
...

```

