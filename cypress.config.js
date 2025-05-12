const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:8000',
    supportFile: false, // No need for complex support file
    viewportWidth: 1280,
    viewportHeight: 4000, // Increased height to capture full page
    screenshotsFolder: 'cypress/screenshots',
    video: false,
    setupNodeEvents(on, config) {
      // No special plugins needed for basic screenshots
      return config;
    },
  },
  screenshotOnRunFailure: true,
}) 