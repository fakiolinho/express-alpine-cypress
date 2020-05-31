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

describe('a user who is in about page and uses the desktop', () => {
  beforeEach(() => {
    cy.viewport('iphone-x');
  });

  it('should be able to navigate to home page after clicking the logo in navbar', () => {
    cy.visit('/about');

    cy.get('nav a').contains('Logo').click();

    cy.contains('h1', 'Home');
    cy.url().should('include', '/');
  });

  it('should be able to navigate to contact page after clicking the about link in mobile menu', () => {
    cy.visit('/about');

    cy.get('[aria-label="mobile-toggle"]').click();
    cy.get('[data-test="mobile-menu"] a').contains('Contact').click();

    cy.contains('h1', 'Contact');
    cy.url().should('include', '/contact');
  });
});

describe('a user who is in contact page and uses the desktop', () => {
  beforeEach(() => {
    cy.viewport('iphone-x');
  });

  it('should be able to navigate to home page after clicking the logo in navbar', () => {
    cy.visit('/contact');

    cy.get('nav a').contains('Logo').click();

    cy.contains('h1', 'Home');
    cy.url().should('include', '/');
  });

  it('should be able to navigate to about page after clicking the about link in mobile menu', () => {
    cy.visit('/contact');

    cy.get('[aria-label="mobile-toggle"]').click();
    cy.get('[data-test="mobile-menu"] a').contains('About').click();

    cy.contains('h1', 'About');
    cy.url().should('include', '/about');
  });
});
