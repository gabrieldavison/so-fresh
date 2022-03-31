import data from "../../src/recipe/data.js"

describe('Recipe', () => {
  beforeEach(() => {
    cy.visit('/recipe');
  });
  
  it('should display the correct title for the recipe', () => {
    cy.get('[data-cy=recipe-title]') // 2
      .should('have.text',data.recipeTitle) // 3
  });

  it('should display the correct description for the recipe', () => {
    cy.get('[data-cy=recipe-description]') // 2
    .should('have.text',data.recipeDescription) // 3
  });

  it('should display the correct image for the recipe', () => {
    cy.get('[data-cy=recipe-image]')
    .should('be.visible') // 2
    .invoke('attr', 'src')
    .should('eq',data.recipeImage) // 3
  });

  it('should display the correct number of ingredients', () => {
    cy.get('[data-cy=ingredients-list]')
    .children()
    .should('have.length', data.ingredients.length)
  })
  
  it('should display the correct number of allergens', () => {
    cy.get('[data-cy=ingredients-list]')
    .children()
    .should('have.length', data.ingredients.length)
  })

  it('should display the correct number of allergens', () => {
    cy.get('[data-cy=allergens-list]')
    .children()
    .should('have.length', data.allergens.length)
  })
})
