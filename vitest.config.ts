import { defineVitestConfig } from '@nuxt/test-utils/config'

export default defineVitestConfig({
  test: {
    environment: 'nuxt',
    coverage: {
      all: true,
      include: [
        '*.vue',
        'components/**/*.vue',
        'data/**/*.ts',
        'pages/**/*.vue',
        'stores/**/*.ts',
        'utils/**/*.ts',
      ],
      exclude: ['data/interfaces/**'],
      provider: 'v8',
      thresholds: {
        lines: 90,
      },
    },
    globals: true,
    environmentOptions: {
      nuxt: {
        mock: {
          intersectionObserver: true,
        },
      },
    },
    // Add any files that need to be run before the tests
    setupFiles: ['./tests_utils/setup.ts'],
  },
})
