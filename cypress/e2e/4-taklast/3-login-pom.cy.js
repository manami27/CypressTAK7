const loginPage = require("../../support/pageObject/loginPage"); //import pom
const loginData = require("../../fixtures/login.json"); //import fixture/data login json
const loginDataArray = require("../../fixtures/login-array.json"); //import fixture/data login array json

describe("Test Login BStackDemo", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("1-Success Login Fav_User", () => {
    cy.get("#username")
      .should("have.text", "Select Username")
      .type("fav_user{enter}");
    cy.get("#password")
      .should("have.text", "Select Password")
      .type("testingisfun99{enter}");
    cy.get("#login-btn").click();
    cy.get(".username").should("be.visible").should("contain", "fav_user");
  });

  it("2-Success Login Fav_User Custom Command", () => {
    //Cara memanggil Custom Command
    cy.login_command("fav_user{enter}", "testingisfun99{enter}", "fav_user");
  });

  it("3-Success Login Fav_User POM", () => {
    cy.get(loginPage.username) // panggil pom locator saja
      .should("have.text", "Select Username")
      .type("fav_user{enter}");
    loginPage.inputPassword("testingisfun99{enter}"); //panggil pom exec

    cy.get(loginPage.login_btn).click();
    cy.get(loginPage.verifLogin)
      .should("be.visible")
      .should("contain", "fav_user");
  });

  it.only("4-Success Login Fav_User POM Data Array", () => {
    loginPage.inputUsername(loginDataArray.loginArray[0].username); //panggil pom + data username ke [0]
    loginPage.inputPassword(loginDataArray.loginArray[0].password); //panggil pom + data password ke [0]

    cy.get(loginPage.login_btn).click();
    cy.get(loginPage.verifLogin)
      .should("be.visible")
      .should("contain", loginDataArray.loginArray[0].verifUser); //panggil pom + data verifuser ke [0]
  });

  it("5-Success Login DemoUser Fixture", () => {
    cy.get("#username")
      .should("have.text", "Select Username")
      .type(loginData.username); //memanggil data usernama dalam file fixture
    cy.get("#password")
      .should("have.text", "Select Password")
      .type(loginData.password); //memanggil data password dalam file fixture
    cy.get("#login-btn").click();
    cy.get(".username")
      .should("be.visible")
      .should("contain", loginData.verifUser);
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
