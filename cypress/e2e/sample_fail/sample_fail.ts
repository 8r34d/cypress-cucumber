import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I visit the home page again", () => {
  cy.visit("/");
});

When("I view the home page again", () => {
  cy.url().should("include", "limebread.co.uk");
});

Then("I should see the header {string} again", (header: string) => {
  cy.get("h1").should("have.text", header);
});
