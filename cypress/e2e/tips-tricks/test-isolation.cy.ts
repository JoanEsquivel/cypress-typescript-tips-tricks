//https://docs.cypress.io/guides/references/changelog#12-0-0
//https://www.cypress.io/blog/2022/12/06/announcing-cypress-12/
//https://docs.cypress.io/guides/core-concepts/test-isolation
//!Activate the "testIsolation" property in our config file for this demo
describe("Test Isolation example", () => {
  it("Visit the website", () => {
    cy.visit("https://www.google.com");
  });
  it("Type a search term, and press enter", () => {
    cy.get(".gLFyf").type("hello masters!{enter}");
  });
});
