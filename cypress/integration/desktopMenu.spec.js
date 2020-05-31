describe('a user who is in home page and uses the desktop', () => {
  it('should be able to navigate to about page after clicking the about link in navbar', () => {
    cy.visit('/');

    cy.get('nav a').contains('About').click();

    cy.contains('h1', 'About');
    cy.url().should('include', '/about');
  });

  it('should be able to navigate to contact page after clicking the about link in navbar', () => {
    cy.visit('/');

    cy.get('nav a').contains('Contact').click();

    cy.contains('h1', 'Contact');
    cy.url().should('include', '/contact');
  });
});

describe('a user who is in about page and uses the desktop', () => {
  it('should be able to navigate to home page after clicking the logo in navbar', () => {
    cy.visit('/about');

    cy.get('nav a').contains('Logo').click();

    cy.contains('h1', 'Home');
    cy.url().should('include', '/');
  });

  it('should be able to navigate to contact page after clicking the about link in navbar', () => {
    cy.visit('/about');

    cy.get('nav a').contains('Contact').click();

    cy.contains('h1', 'Contact');
    cy.url().should('include', '/contact');
  });
});

describe('a user who is in contact page and uses the desktop', () => {
  it('should be able to navigate to home page after clicking the logo in navbar', () => {
    cy.visit('/contact');

    cy.get('nav a').contains('Logo').click();

    cy.contains('h1', 'Home');
    cy.url().should('include', '/');
  });

  it('should be able to navigate to about page after clicking the about link in navbar', () => {
    cy.visit('/contact');

    cy.get('nav a').contains('About').click();

    cy.contains('h1', 'About');
    cy.url().should('include', '/about');
  });
});
