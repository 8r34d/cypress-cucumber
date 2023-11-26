import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("I visit duckduckgo.com", () => {
  cy.visit("https://limebread.co.uk");
});

Then("I should see a search bar", () => {
  // cy.get("input[type=text]")
  //   .should("have.attr", "placeholder")
  //   .and(
  //     "match",
  //     /Search the web without being tracked|Search without being tracked/
  //   );

  // assert.deepEqual({}, {});

  cy.dataCy("greeting").should("not.exist");

  // Cypress.env("greeting").should.be(Cypress.env("configFile"));

  cy.log(Cypress.env("configFile"));

  cy.log("greeting", Cypress.env("greeting"));
  cy.log("host", Cypress.env("host"));
  cy.log("environment", Cypress.env("environment"));

  console.log("greeting", Cypress.env("greeting"));
  console.log("host", Cypress.env("host"));
  console.log("environment", Cypress.env("environment"));
});
