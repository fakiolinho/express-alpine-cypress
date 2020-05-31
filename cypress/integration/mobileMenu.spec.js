describe('a user who is in home page and uses a mobile device', () => {
  beforeEach(() => {
    cy.viewport('iphone-x');
  });

  it('should be able to navigate to about page after clicking the about link in mobile menu', () => {
    cy.visit('/');

    cy.get('[aria-label="mobile-toggle"]').click();
    cy.get('[data-test="mobile-menu"] a').contains('About').click();

    cy.contains('h1', 'About');
    cy.url().should('include', '/about');
  });

  it('should be able to navigate to contact page after clicking the about link in mobile menu', () => {
    cy.visit('/');

    cy.get('[aria-label="mobile-toggle"]').click();
    cy.get('[data-test="mobile-menu"] a').contains('Contact').click();

    cy.contains('h1', 'Contact');
    cy.url().should('include', '/contact');
  });
});
