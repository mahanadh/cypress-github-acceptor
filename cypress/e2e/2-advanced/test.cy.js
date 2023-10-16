describe('Simple Cypress Test', () => {
    it('should visit a website and perform an action', () => {
      // Visit a website
      cy.visit('https://cloudfactory.com');
  
      // Assert that we have navigated to the correct page
      cy.url().should('include', 'cloudfactory');
  
      // Perform more actions and assertions as needed
      // For example, filling out a form, checking elements, etc.
    });
  });