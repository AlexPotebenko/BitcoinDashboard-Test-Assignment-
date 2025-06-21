// cypress/e2e/nav_menu_mobile.cy.js

describe('NavMenuMobile (Mobile Navigation)', () => {
  beforeEach(() => {
    cy.viewport('iphone-6');
    cy.visit('/dashboard');
  });

  it('shows navigation links for Dashboard and User Cabinet', () => {
    cy.get('header nav').contains('Dashboard').should('be.visible');
    cy.get('header nav').contains('User Cabinet').should('be.visible');
  });

  it('highlights Dashboard link as active on /dashboard', () => {
    cy.get('header nav').contains('Dashboard').should('have.class', 'bg-gray-200');
  });

//   it('navigates to User Cabinet and highlights it', () => {
//     cy.viewport('iphone-6');
//     cy.visit('/dashboard');
//     cy.get('button[aria-label="Open navigation menu"]').click();
//     cy.contains('User Cabinet').click();
//     cy.url().should('include', '/user-cabinet');
//     cy.get('button[aria-label="Open navigation menu"]').click(); // reopen menu
//     cy.contains('User Cabinet').should('have.class', 'text-primary');
//   });
});
