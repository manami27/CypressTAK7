describe("Test Add to Cart BStackDemo", () => {
  beforeEach(() => {
    cy.visit("https://bstackdemo.com/signin");
    //cy.get("#username").should("have.text", "Select Username");
    //cy.get("#username").type("fav_user{enter}");
    //cy.get("#password").should("have.text", "Select Password");
    //cy.get("#password").type("testingisfun99{enter}");
    //cy.get("#login-btn").click();
    //cy.get(".username").should("be.visible");
    //cy.get(".username").should("contain", "fav_user");
    cy.login("fav_user{enter}", "testingisfun99{enter}");
  });

  it("Success Add to Cart", () => {
    cy.get("#1").should("be.visible");
    // Get the children form of an input field
    cy.get("#1").children(".shelf-item__buy-btn").click();
    cy.get(".bag__quantity").should("have.text", "1");

    //checkout
    cy.get(".buy-btn").click();
    cy.get('[data-test="shipping-address-heading"]').should("be.visible");
    cy.url().should("include", "/checkout");
  });
});
