import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    /* Use jsdom so React components can render in tests */
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./vitest.setup.ts'],
    include: ['test/**/*.{test,spec}.{ts,tsx}'],
  },
})
