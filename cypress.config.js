const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  chromeWebSecurity: false,
  video: true,
  responseTimeout: 50000,
  pageLoadTimeout: 60000,
  defaultCommandTimeout: 15000,
  redirectionLimit: 1,
  experimentalModifyObstructiveThirdPartyCode: true,
  defaultCommandTimeout: 60000,
  execTimeout: 60000,
  watchForFilesChanges: false,
  failOnStatusCode: false,
   e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'https://main.core.us.dev.amdocsplatformx.com/',
  }
  })
