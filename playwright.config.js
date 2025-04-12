const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: '__tests__',
  timeout: 30000,
  expect: {
    timeout: 5000
  },
  reporter: 'html',
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
  },
});