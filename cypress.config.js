const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://client.amega.finance',
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      on("before:browser:launch", (browser, launchOptions) => {
        if (browser.name === "chrome") {
          launchOptions.args.push("--disable-web-security");
          launchOptions.args.push("--disable-site-isolation-trials");
        }
      });
    },
    reporter:'cypress-mochawesome-reporter',
    reporterOptions: {
      charts: true,
      reportPageTitle: 'trading app tests',
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false,
    },
  },
});
