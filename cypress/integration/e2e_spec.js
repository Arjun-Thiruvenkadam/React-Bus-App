describe('The Home Page', () => {
  it('successfully loads', () => {
    cy.visit('/');
  });
});

describe('Home Page to Orders page', () => {
  it('successfully loads', () => {
    cy.visit('/');
    cy.get('.Navlink').click();
  });
});

describe('Home Page to login page to order', () => {
  it('successfully loads', () => {
    cy.visit('/');
    cy.get('a[href*="login"]').click();
    cy.get('input[type="email"]').type('user1@gmail.com');
    cy.get('input[type="password"]').type('password');
    cy.get('form').within(() =>
      cy
        .get('button')
        .should('have.class', 'Button Success')
        .click(),
    );
    cy.get('a[href*="order"]').click();
  });
});
