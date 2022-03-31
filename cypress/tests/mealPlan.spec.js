describe("Testing meal plan", () => {
  it("successfully loads next image after clicking right button", () => {
    cy.visit("http://localhost:3000");

    cy.get("[data-cy=image-00-0]");

    cy.get("[data-cy=right-button-00]").click();

    cy.get("[data-cy=image-00-1]");

    cy.get("[data-cy=right-button-00]").click();

    cy.get("[data-cy=image-00-2]");
  });
});
