describe("Test Add to Cart BStackDemo", () => {
  beforeEach(() => {
    //cy.viewport("iphone-6");
    cy.visit("/");
    //login
    cy.get("#username")
      .should("have.text", "Select Username")
      .type("fav_user{enter}");
    cy.get("#password")
      .should("have.text", "Select Password")
      .type("testingisfun99{enter}");
    cy.get("#login-btn").click();

    //verify after login
    cy.get(".username").should("be.visible").should("contain", "fav_user");
  });

  it.only("Success Add to Cart 1 Product", () => {
    //cy.viewport('iphone-6')
    //add to cart
    cy.get("#1").should("be.visible");
    cy.get("#1").children(".shelf-item__buy-btn").click();
    cy.get(".bag__quantity").should("have.text", "1");

    //checkout
    cy.get(".buy-btn").click();
    cy.url().should("include", "/checkout");
  });

  it("Success Add to Cart 2 Product", () => {});
});
