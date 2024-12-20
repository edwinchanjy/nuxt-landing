import { createConfigForNuxt } from '@nuxt/eslint-config/flat'
import eslintConfigPrettier from 'eslint-config-prettier'
import prettierPlugin from 'eslint-plugin-prettier'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
// @ts-expect-error missing types
import tailwindcss from 'eslint-plugin-tailwindcss'

// Run `npx @eslint/config-inspector` to inspect the resolved config interactively
export default createConfigForNuxt({
  features: {
    tooling: true,
    stylistic: true,
    typescript: {
      strict: true,
    },
  },
})
  .append({
    files: ['**/*.vue'],
    name: 'local/tailwindcss',
    plugins: {
      tailwindcss,
    },
    rules: {
      'tailwindcss/classnames-order': 'warn',
      'tailwindcss/enforces-negative-arbitrary-values': 'warn',
      'tailwindcss/enforces-shorthand': 'warn',
      'tailwindcss/no-contradicting-classname': 'warn',
      'tailwindcss/no-unnecessary-arbitrary-value': 'warn',
    },
  })
  .append({
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      ...eslintConfigPrettier.rules,
      ...eslintPluginPrettierRecommended.rules,
    },
  })
  .override('nuxt/javascript', {
    rules: {
      'no-console': ['warn', { allow: ['warn', 'error', 'debug'] }],
      'require-await': 'error',
    },
  })
