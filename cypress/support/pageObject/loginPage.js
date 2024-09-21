class loginPage {
  username = "#username";
  password = "#password";
  login_btn = "#login-btn";
  error_msg = ".api-error";

  inputPassword(pass) {
    cy.get(this.password).type(pass);
  }

  inputUsername(usernm) {
    cy.ketik(this.username, usernm);
  }
}

module.exports = new loginPage();
