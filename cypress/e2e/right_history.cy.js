// cypress/e2e/right_history.cy.js

describe('RightHistory panel', () => {
  beforeEach(() => {
    cy.viewport(1400, 900); // ensure desktop layout
    cy.visit('/dashboard');
  });

  it('shows the History panel with correct title', () => {
    cy.get('aside').contains('History').should('be.visible');
  });

  it('shows all static history items with emphasis', () => {
    const actions = [
      'Deposited $500',
      'Bought 0.5 BTC',
      'Sold 0.2 BTC',
      'Withdrew $100',
    ];
    actions.forEach((action) => {
      cy.get('aside').contains(action).should('have.class', 'font-medium');
    });
  });

  it('shows the correct time for each history item', () => {
    const times = [
      '2025-06-20 10:00',
      '2025-06-20 09:30',
      '2025-06-19 18:00',
      '2025-06-19 12:00',
    ];
    times.forEach((time) => {
      cy.get('aside').contains(time).should('have.class', 'text-gray-500');
    });
  });
});
