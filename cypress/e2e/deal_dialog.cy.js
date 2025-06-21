// cypress/e2e/deal_dialog.cy.js

describe('Deal Dialog', () => {
  beforeEach(() => {
    cy.visit('/dashboard');
  });

  it('shows static deal data form', () => {
    cy.contains('Deal Data Form').should('be.visible');
    cy.get('input[readOnly][value="50"]').should('exist');
    cy.get('input[readOnly][value="market"]').should('exist');
    cy.contains('Submit (Static)').should('be.disabled');
  });
});
