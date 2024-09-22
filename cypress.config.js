const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://bstackdemo.com/signin",

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    //set viewport
    viewportHeight: 1024,
    viewportWidth: 668,
    //viewport: "iphone-6",

    defaultCommandTimeout: 8000,
    video: true,
    chromeWebSecurity: false,

    //untuk disable autoron after save
    watchForFileChanges: false,
  },
});
