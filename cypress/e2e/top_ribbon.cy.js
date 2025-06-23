// cypress/e2e/top_ribbon.cy.js

describe('TopRibbon', () => {
  beforeEach(() => {
    cy.visit('/dashboard');
  });

  it('shows the correct balances and BTC price', () => {
    cy.get('header').within(() => {
      cy.contains('USD: $2000').should('be.visible');
      cy.contains('BTC: 1.2345').should('be.visible');
      cy.contains('BTC Price: $42000').should('be.visible');
    });
  });
});
