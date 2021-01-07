Cypress.Commands.add("login", (email, password) => {
  cy.visit("/login");
  cy.url().should("include", "/login");
  cy.get("[formcontrolname=email]").type(email);
  cy.get("[formcontrolname=password]").type(password);
  cy.get(".btn").click();
});
