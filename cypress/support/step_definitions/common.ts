import { Then } from "@badeball/cypress-cucumber-preprocessor";

Then("I should see the paragraph {string}", (paragraph: string) => {
  cy.get("p").should("have.text", paragraph);
});
