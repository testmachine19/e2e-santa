const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const createEsbuildPlugin =
  require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
const addCucumberPreprocessorPlugin =
  require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const allureWriter = require("@shelex/cypress-allure-plugin/writer");

module.exports = defineConfig({
  projectId: "2ue5yt",
  video: false,
  e2e: {
    baseUrl: "https://staging.lpitko.ru",
    testIsolation: false,
    specPattern: "**/*.feature",
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });

      on("file:preprocessor", bundler);
      addCucumberPreprocessorPlugin(on, config);
      allureWriter(on, config);
      return config;
    },
    viewportSizes: {
      width: 1920,
      height: 1080,
    },
    env: {
      allureReuseAfterSpec: true,
    },
  },
});
