// --> https://docs.cypress.io/api/commands/intercept#Disabling-logs-for-a-request

describe("Disable logs for requests", () => {
  beforeEach(() => {
    cy.visit("https://demoqa.com/login");
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
  });
  it("Login with Logs", () => {
    cy.wait(10000);
  });
});
