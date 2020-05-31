describe('a user who visits home page under url "/"', () => {
  it('should be able to see Home headline and the url should equal with "/"', () => {
    cy.visit('/');

    cy.contains('h1', 'Home');
    cy.url().should('include', '/');
  });
});

describe('a user who visits about page under url "/about"', () => {
  it('should be able to see About headline and the url should equal with "/about"', () => {
    cy.visit('/about');

    cy.contains('h1', 'About');
    cy.url().should('include', '/about');
  });
});

describe('a user who visits contact page under url "/contact"', () => {
  it('should be able to see About headline and the url should equal with "/contact"', () => {
    cy.visit('/contact');

    cy.contains('h1', 'Contact');
    cy.url().should('include', '/contact');
  });
});
