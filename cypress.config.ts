import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      const version = config.env.version || "local";
      config.env = require(`./cypress/config/${version}.json`);
      config.baseUrl = config.env.baseUrl;

      return config;
    },
    // baseUrl: "https://demoqa.com/",
    // testIsolation: false,
  },
});
