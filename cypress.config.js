const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://clientbase.us/v5',
    excludeSpecPattern: [
      'cypress/e2/1-getting-started/*.js',
      'cypress/e2e/2-advanced-examples/*.js'
    ],
    viewportWidth: 1280,
    viewportHeight: 720,
  },
});
