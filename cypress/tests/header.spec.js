// you need to be running the react app in order for this to work
describe("Visiting different pages from the header", () => {
  it("loads successfully", () => {
    // .visit is a command that tells the browser to go to the nominated address
    cy.visit("http://localhost:3000");

    // checking account page
    cy.contains("Account").click();
    cy.url().should("include", "/account");

    // checking survey page
    cy.contains("Survey").click();
    cy.url().should("include", "/survey");

    // checking survey page
    cy.contains("All Subscriptions").click();
    cy.url().should("include", "/");
  });
});
