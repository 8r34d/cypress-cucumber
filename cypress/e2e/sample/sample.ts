import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I visit the home page", () => {
  cy.visit("/");
});

When("I view the home page", () => {
  cy.url().should("include", "limebread.co.uk");
});

Then("I should see the header {string}", (header: string) => {
  cy.get("h1").contains(header);
});
