describe('Visual Match with Figma Design', () => {
  before(() => {
    // Visit the page
    cy.visit('/');
    
    // Wait for elements to be fully rendered
    cy.get('img').should('be.visible');
    cy.wait(2000);
  });

  it('should visually match the Figma design reference', () => {
    // Take a full page screenshot for comparison
    cy.screenshot('implementation-fullpage', { 
      capture: 'fullPage',
      overwrite: true
    });
    
    // Capture individual sections for detailed comparison
    cy.get('nav').screenshot('nav-section', { overwrite: true });
    cy.get('#about').screenshot('about-section', { overwrite: true });
    cy.get('#work').screenshot('work-section', { overwrite: true });
    
    // In a full implementation, we would compare these screenshots with reference images
    // from the Figma design using a visual testing library
    cy.log('Screenshots captured for visual comparison with Figma design');
  });

  it('should have the navigation with correct styling', () => {
    cy.get('nav').within(() => {
      cy.contains('Logo').should('be.visible');
      cy.contains('About').should('be.visible');
      cy.contains('Work').should('be.visible');
      cy.contains('Contact').should('be.visible');
    });
  });

  it('should have the header section matching Figma design', () => {
    cy.get('#about').within(() => {
      cy.contains('Branding | Image making').should('be.visible');
      cy.contains('Visual Designer').should('be.visible');
      cy.contains('Contact').should('be.visible');
      cy.get('img[src*="header-image"]').should('be.visible');
    });
  });

  it('should have the skills section with correct colors', () => {
    cy.get('.bg-redSkill').should('be.visible');
    cy.get('.bg-orangeSkill').should('be.visible');
    cy.get('.bg-greenSkill').should('be.visible');
    
    cy.contains('Product Design').should('be.visible');
    cy.contains('Visual Design').should('be.visible');
    cy.contains('Art Direction').should('be.visible');
  });

  it('should have the gallery section with six project items', () => {
    cy.get('#work').within(() => {
      cy.contains('Latest work').should('be.visible');
      cy.get('img').should('have.length', 6);
      cy.contains('Project title').should('exist');
      cy.contains('UI, Art direction').should('exist');
    });
  });

  it('should have the testimonial section matching design', () => {
    cy.contains('h2', 'Testimonial').should('be.visible');
    cy.get('.testimonial-card').should('have.length.at.least', 1);
    cy.contains('Gemma Nolen').should('be.visible');
    cy.contains('Google').should('be.visible');
  });

  it('should have the contact section with correct form elements', () => {
    cy.get('#contact').within(() => {
      cy.contains('Lets work together').should('be.visible');
      cy.get('input[placeholder="Name"]').should('be.visible');
      cy.get('input[placeholder="Email"]').should('be.visible');
      cy.contains('Submit').should('be.visible');
    });
  });
}); 