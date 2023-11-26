import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("I visit duckduckgo.com", () => {
  cy.visit("/");
});

Then("I should see a search bar", () => {
  cy.dataCy("greeting").should("not.exist");

  cy.log(Cypress.env("configFile"));

  cy.log(Cypress.env("MY_SECRET_USER"));
  cy.log(Cypress.env("MY_SECRET_PASSWORD"));

  cy.log("greeting", Cypress.env("greeting"));
  cy.log("host", Cypress.env("host"));
  cy.log("environment", Cypress.env("environment"));

  console.log("greeting", Cypress.env("greeting"));
  console.log("host", Cypress.env("host"));
  console.log("environment", Cypress.env("environment"));
});
