describe("Test Login OrangeHRM", () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit(Cypress.config("baseUrl"));
  });

  it("Test Login Failed", () => {
    cy.get('[name="username"]').type("wrongadmin");
    cy.get('[placeholder="Password"]').type("wrongpassword");
    cy.get(".oxd-button").click();
    cy.get(".oxd-alert-content > .oxd-text").should(
      "contain.text",
      "Invalid credentials"
    );
  });

  it("Test Login Success", () => {
    cy.get('[name="username"]').type("Admin");
    cy.get('[placeholder="Password"]').type("admin123");
    cy.get(".oxd-button").click();
    cy.get(".oxd-userdropdown-name").should("be.visible");
  });
});
