import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("I visit duckduckgo.com", () => {
  cy.visit("/");
});

Then("I should see a search bar", () => {
  cy.get("input[type=text]")
    .should("have.attr", "placeholder")
    .and(
      "match",
      /Search the web without being tracked|Search without being tracked/
    );

  assert.deepEqual({}, {});

  cy.dataCy("greeting").should("not.exist");

  cy.log("greeting", Cypress.env("greeting"));
  cy.log("host", Cypress.env("host"));
  cy.log("environment", Cypress.env("environment"));
});
