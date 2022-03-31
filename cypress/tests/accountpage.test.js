describe('renders account page', () => {
	it('renders correctly', () => {
		// visit homepage where there is navigation
		cy.visit('/');

		// click account link from navigation
		cy.get('a[href*="/account"]').should('exist').click();

		// assert title text
		cy.get('.title').should('exist').and('have.text', 'Your Info.');

		// assert to have 6 inputs
		cy.get('input').should('have.length', 6);

		// assert save button
		cy.get('button').should('exist').contains('SAVE');
	});
});
