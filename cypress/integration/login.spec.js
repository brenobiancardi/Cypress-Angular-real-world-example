const { createYield } = require("typescript");

describe("Realizar Login", () => {
  it("Login com sucesso", () => {
    cy.login("testecypress@testecypress.com", "testecypress");
    cy.get(".nav-item:nth-child(4) > .nav-link").click();
    cy.get(".btn:nth-child(5)").click();
    cy.url().should("contain", "settings");
  });

  it("Login com usuario ou senha invalido", () => {
    cy.login("usuario@inexistente.com", "senhaerrada");
    cy.get(".error-messages > li").should(
      "contain",
      "email or password is invalid"
    );
  });
});
