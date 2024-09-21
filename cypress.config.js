const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl:
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    //viewportHeight: 1024,
    //viewportWidth: 668,
    defaultCommandTimeout: 8000,
    video: true,
    chromeWebSecurity: false,
  },
});
