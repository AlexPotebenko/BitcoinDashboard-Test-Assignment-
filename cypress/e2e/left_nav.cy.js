// cypress/e2e/left_nav.cy.js

describe('LeftNav (Sidebar Navigation)', () => {
  beforeEach(() => {
    cy.viewport(1400, 900); // ensure desktop layout
    cy.visit('/dashboard');
  });

  it('shows navigation links for Dashboard and User Cabinet', () => {
    cy.get('aside').contains('Dashboard').should('be.visible');
    cy.get('aside').contains('User Cabinet').should('be.visible');
  });

  it('highlights Dashboard link as active on /dashboard', () => {
    cy.get('aside').contains('Dashboard').should('have.class', 'bg-gray-200');
  });

//   it('navigates to User Cabinet and highlights it', () => {
//     cy.get('nav').contains('User Cabinet').click();
//     cy.url().should('include', '/user-cabinet');
//     cy.get('nav').contains('User Cabinet').should('have.class', 'text-primary');
//   });
});
