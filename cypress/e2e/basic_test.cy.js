describe("Phonebook", function () {
  it("front page can be opened and contains numbers", function () {
    cy.visit("http://localhost:3001");
    cy.contains("Phonebook");
    cy.contains("Numbers");
    cy.contains("Anna 040-1234556");
  });
});
