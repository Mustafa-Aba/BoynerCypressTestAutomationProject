const { defineConfig } = require("cypress");
const { lighthouse, prepareAudit } = require('@cypress-audit/lighthouse');
const fs = require('fs');
const dotenv = require('dotenv');

dotenv.config();

module.exports = defineConfig({
  projectId: "kwepke",
  viewportHeight: 1000,
  viewportWidth: 1500,
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      if (process.env.CYPRESS_ENV) {
        const configFile = `./cypress/config/${process.env.CYPRESS_ENV}.json`;
        if (fs.existsSync(configFile)) {
          const configOverrides = require(configFile);
          const selectedConfigKey = process.env.CYPRESS_KEY || 'url1';
          if (configOverrides[selectedConfigKey]) {
            config = { ...config, ...configOverrides[selectedConfigKey] };
            config.baseUrl = configOverrides[selectedConfigKey].baseUrl;
          }
        }
      }

      on("before:browser:launch", (browser = {}, launchOptions) => {
        prepareAudit(launchOptions);
      });
      on("task", {
        lighthouse: lighthouse()
      });
      require('cypress-mochawesome-reporter/plugin')(on);
      require('@cypress/grep/src/plugin')(config);

      config.env.URL = process.env.URL;
      return config;
    },
    baseUrl: process.env.URL,
    specPattern: 'cypress/e2e/**/*.{js, jsx, ts, tsx}',
    experimentalStudio: true,
    experimentalWebKitSupport: true,
    experimentalRunAllSpecs: true
  },
});
