describe("Test Add to Cart BStackDemo", () => {
  it("Success Login User Select Option", () => {
    cy.visit("/");
    cy.get("#username").should("have.text", "Select Username");
    cy.get("#username").click();
    //select demouser, pilihan pertama
    cy.get("#react-select-2-option-0-0").click();

    cy.get("#password").should("have.text", "Select Password");
    cy.get("#password").click();
    cy.get("#react-select-3-option-0-0").click();

    cy.get("#login-btn").click();
    cy.get(".username").should("be.visible");
    cy.get(".username").should("contain", "demouser");
  });

  it("Success Login Fav_User", () => {
    cy.visit("/");
    cy.get("#username")
      .should("have.text", "Select Username")
      .type("fav_user{enter}");
    cy.get("#password")
      .should("have.text", "Select Password")
      .type("testingisfun99{enter}");
    cy.get("#login-btn").click();
    cy.get(".username").should("be.visible").should("contain", "fav_user");
  });

  it("Success Login DemoUser", () => {
    cy.visit("/");
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
    cy.visit("/");
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
    cy.visit("/");
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
    cy.visit("/");
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
