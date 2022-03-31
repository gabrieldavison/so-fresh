import data from "../../src/subscription/data.js"
describe('Subscription', () => {
    beforeEach(() => {
      cy.visit('/subscription'); // 1
    });

    it('should display the correct title for the subscription', () => {
        cy.get('[data-cy=subscription-title]') // 2
          .should('have.text',data.subscriptionTitle) // 3
      });

    it('should display the correct description for the subscription', () => {
      cy.get('[data-cy=subscription-summary]') // 2
      .should('have.text',data.subscriptionSummary) // 3
    });

    it('should display the correct image for the subscription', () => {
        cy.get('[data-cy=subscription-image]')
        .should('be.visible') // 2
        .invoke('attr', 'src')
        .should('eq',data.subscriptionImage) // 3
      });
      
    it('should display the correct number of recipe cards', () => {
        cy.get('[data-cy=recipe-card-container]')
        .children()
        .should('have.length', data.recipes.length)
    })
    
  });