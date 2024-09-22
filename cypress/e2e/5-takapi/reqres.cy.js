describe("Reqres Test", () => {
  function randomName() {
    const randomString = Math.random().toString(36).substring(3, 10);
    const name = randomString + "user";
    return name;
  }

  let rname = randomName();

  it("Get List User", () => {
    cy.request({
      method: "GET",
      url: "https://reqres.in/",
    }).then((response) => {
      expect(response.status).to.equal(200);
    });
  });

  it("Create User", () => {
    cy.log(rname);
    cy.request({
      method: "POST",
      url: "https://reqres.in/api/users",
      body: {
        name: rname,
        job: "leader",
      },
    }).then((response) => {
      expect(response.status).to.equal(201);
      expect(response.body).has.property("name", rname);
      expect(response.body).has.property("job", "leader");
    });
  });
});
