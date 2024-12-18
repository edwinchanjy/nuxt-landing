// @ts-check
import { createConfigForNuxt } from '@nuxt/eslint-config/flat'
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
}).append(
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
      'tailwindcss/no-contradicting-classname': 'warn',
      'tailwindcss/no-custom-classname': 'error',
      'tailwindcss/no-unnecessary-arbitrary-value': 'warn',
    },
  },
)
  .override('nuxt/javascript', {
    rules: {
      'no-console': ['warn', { allow: ['warn', 'error', 'debug'] }],
      'require-await': 'error',
    },
  })
