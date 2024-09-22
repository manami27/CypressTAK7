class loginPage {
  username = "#username";
  password = "#password";
  login_btn = "#login-btn";
  error_msg = ".api-error";
  verifLogin = ".username";

  inputPassword(pass) {
    cy.get(this.password).type(pass);
  }

  //memanggil custom command di POM
  inputUsername(usernm) {
    cy.ketik(this.username, usernm);
  }
}

module.exports = new loginPage();
