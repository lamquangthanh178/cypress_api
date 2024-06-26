const { defineConfig } = require("cypress");
const { allureCypress } = require("allure-cypress/reporter");

module.exports = defineConfig({
  projectId: "3ivwee",
  video: true,
  env: {
    url: 'https://stage.reqres.in',
    userId: '2',
    invalidUserId: '-1'
  },
  e2e: {
    setupNodeEvents(on, config) {
      experimentalRunAllSpecs: true,
      allureCypress(on)
      // implement node event listeners here
    },
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
  
});
