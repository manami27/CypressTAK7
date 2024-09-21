// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })

Cypress.Commands.add("login", (username, password) => {
  cy.get("#username").clear().type(username);
  cy.get("#password").clear().type(password);
  cy.get("#login-btn").click();
  //cy.get(".username").should("be.visible");
  //cy.get(".username").should("contain", "fav_user");
});

Cypress.Commands.add("ketik", (locator, value) => {
  cy.get(locator).should("be.visible").type(value);
});

Cypress.Commands.add("verifyContain", (locator, text) => {
  cy.get(locator).should("contain.text", text);
});

Cypress.Commands.add("verifyVisible", (locator) => {
  cy.get(locator).should("be.visible");
});

//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
