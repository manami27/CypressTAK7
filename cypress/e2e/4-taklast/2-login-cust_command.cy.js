describe("Test Add to Cart BStackDemo", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Success Login Fav_User", () => {
    cy.get("#username")
      .should("have.text", "Select Username")
      .type("fav_user{enter}");
    cy.get("#password")
      .should("have.text", "Select Password")
      .type("testingisfun99{enter}");
    cy.get("#login-btn").click();
    cy.get(".username").should("be.visible").should("contain", "fav_user");
  });

  it.only("Success Login Fav_User Custom Command", () => {
    //Cara memanggil Custom Command
    cy.login_command("fav_user{enter}", "testingisfun99{enter}", "fav_user");
  });

  it("Success Login DemoUser", () => {
    cy.get("#username")
      .should("have.text", "Select Username")
      .type("demouser{enter}");
    cy.get("#password")
      .should("have.text", "Select Password")
      .type("testingisfun99{enter}");
    cy.get("#login-btn").click();
    cy.get(".username").should("be.visible").should("contain", "demouser");
  });

  it("Success Login Existing Orders User", () => {
    cy.get("#username")
      .should("have.text", "Select Username")
      .type("existing_orders_user{enter}");
    cy.get("#password")
      .should("have.text", "Select Password")
      .type("testingisfun99{enter}");
    cy.get("#login-btn").click();
    cy.get(".username")
      .should("be.visible")
      .should("contain", "existing_orders_user");
  });

  it("Failed Login - Wrong User", () => {
    cy.get("#username")
      .should("have.text", "Select Username")
      .type("favuser{enter}");
    cy.get("#password")
      .should("have.text", "Select Password")
      .type("testingisfun99{enter}");
    cy.get("#login-btn").click();
    cy.get(".api-error").should("be.visible").should("contain.text", "Invalid");
  });

  it("Failed Login - Wrong Password", () => {
    cy.get("#username")
      .should("have.text", "Select Username")
      .type("fav_user{enter}");
    cy.get("#password")
      .should("have.text", "Select Password")
      .type("pass123{enter}");
    cy.get("#login-btn").click();
    cy.get(".api-error").should("be.visible").should("contain.text", "Invalid");
  });
});
