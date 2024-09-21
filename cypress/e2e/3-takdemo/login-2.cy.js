import loginPage from "../../support/pageObject/loginPage";
const userData = require("../../fixtures/3-takdemo/fail-login.json");
const userArray = require("../../fixtures/3-takdemo/pass-login.json");

describe("Test Login BStackDemo", () => {
  beforeEach(() => {
    cy.visit("https://bstackdemo.com/signin");
  });

  it("Test Login Success", () => {
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

  it("Test Login Success 2", () => {
    cy.get("#username").should("have.text", "Select Username");
    //cy.get("#username").type("fav_user{enter}");
    cy.ketik("#username", "fav_user{enter}");

    cy.get("#password").should("have.text", "Select Password");
    cy.get("#password").type("testingisfun99{enter}");

    cy.get("#login-btn").click();
    // cy.get(".username").should("be.visible");
    cy.verifyVisible(".username");
    //cy.get(".username").should("contain", "fav_user");
    cy.verifyContain(".username", "fav_user");
  });

  it("Test Login Success Array", () => {
    loginPage.inputUsername(userArray.validLogin[0].validUser);
    loginPage.inputPassword(userArray.validLogin[0].validPass);
    cy.get("#login-btn").click();
    cy.verifyVisible(".username");
    cy.verifyContain(".username", userArray.validLogin[0].verifyName);
  });

  it.only("Test Login Failed Array Multiple", () => {
    cy.fixture("3-takdemo/fail-login.json").then((user) => {
      user.failed_Login.forEach((data) => {
        cy.login(data.username, data.password);
        cy.get(".api-error").should("be.visible");
      });
    });
  });

  it("Test Login Failed", () => {
    cy.get("#username").should("have.text", "Select Username");
    cy.get("#username").type("favuser{enter}");

    cy.get("#password").should("have.text", "Select Password");
    cy.get("#password").type("wrong pass{enter}");

    cy.get("#login-btn").click();
    cy.get(".api-error").should("be.visible");
    cy.get(".api-error").should("contain.text", "Invalid");
  });

  it("Test Login Failed (POM)", () => {
    //cy.get(loginPage.username).type("favuser{enter}");
    //cy.ketik(loginPage.username, "favuser{enter}");
    loginPage.inputPassword("favuser{enter}");

    //cy.get(loginPage.password).type("wrong pass{enter}");
    loginPage.inputPassword("wrong pass{enter}");

    cy.get(loginPage.login_btn).click();
    cy.get(loginPage.error_msg)
      .should("be.visible")
      .should("contain.text", "Invalid");
  });

  it("Test Login Failed (POM&Fixture)", () => {
    loginPage.inputPassword(userData.validUser);
    loginPage.inputPassword(userData["wrongPass "]);

    cy.get(loginPage.login_btn).click();
    cy.get(loginPage.error_msg)
      .should("be.visible")
      .should("contain.text", "Invalid");
  });
});
