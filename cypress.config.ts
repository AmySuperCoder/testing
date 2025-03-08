import { defineConfig } from "cypress";
import customViteConfig from "./vite.config";

export default defineConfig({
  //   component: {
  //     devServer: {
  //       framework: "react",
  //       bundler: "vite",
  //       viteConfig: customViteConfig,
  //     },
  //     specPattern: "cypress/component/**/*.cy.{js,ts,jsx,tsx}",
  //     supportFile: false,
  //   },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "http://localhost:3001",
    supportFile: false,
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
});
