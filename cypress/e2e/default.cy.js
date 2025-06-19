describe('Default Example Test', () => {
  it('should load the homepage', () => {
    cy.visit('/')
    cy.contains('Next.js').should('exist')
  })
})
