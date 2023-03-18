//https://docs.cypress.io/api/commands/origin#Alternative-navigation
describe("cy.origin quick example", () => {
  beforeEach(() => {
    cy.visit("https://demoqa.com/login");
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
  });
  it("Origin issue", () => {
    cy.get(".main-header").should("have.text", "Login");
    cy.visit("https://www.google.com");
    cy.get(".gLFyf").type("hello masters!");
  });
  it("cy.origin fix", () => {
    cy.get(".main-header").should("have.text", "Login");
    cy.visit("https://www.google.com");
    cy.origin("https://www.google.com", () => {
      cy.get(".gLFyf").type("hello masters!{enter}");
    });
  });
});
