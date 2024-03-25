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
  failOnStatusCode: false
  })
