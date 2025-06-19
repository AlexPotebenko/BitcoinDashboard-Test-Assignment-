import { defineConfig } from "cypress";

/**
 * @type {Cypress.Config}
 */

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    specPattern: "cypress/e2e/**/*.cy.{js,ts}",
  },
});
