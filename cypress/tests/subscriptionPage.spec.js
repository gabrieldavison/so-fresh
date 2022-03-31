// subscription.spec.js

// you need to be running the react app in order for this to work
describe("The subscription page", () => {
  it("loads the subscription page successfully", () => {
    // .visit is a command that tells the browser to go to the nominated address
    cy.visit("http://localhost:3000");
    // checking that we can click the "word" fruit that is on the page
    cy.contains("fruit").click();
    // checking that it leads us to a different page
    cy.url().should("include", "/subscription");
  });
});
