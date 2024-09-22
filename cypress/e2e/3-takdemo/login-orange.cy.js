describe("Test Login OrangeHRM", () => {
  beforeEach(() => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
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
    cy.get(".oxd-userdropdown-tab").should("be.visible");
  });
});
