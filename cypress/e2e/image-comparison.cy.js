describe('Image-based Comparison with Figma Design', () => {
  beforeEach(() => {
    // Visit the website
    cy.visit('/');
    
    // Wait for all images to load
    cy.get('img').should('be.visible');
    cy.wait(2000); // Ensure everything is fully rendered
  });

  it('should take a screenshot for manual comparison with Figma', () => {
    // Take a screenshot of the full page
    cy.screenshot('full-page-comparison', { 
      capture: 'fullPage',
      overwrite: true 
    });
    
    // We would then use this screenshot to manually compare with the Figma design
    // or use a visual testing library to automate the comparison
    cy.log('Screenshot taken for comparison with Figma design');
  });

  it('should take sectional screenshots for detailed comparison', () => {
    // Navigation
    cy.get('nav').screenshot('navigation-section', { overwrite: true });
    
    // Header section
    cy.get('#about').screenshot('header-section', { overwrite: true });
    
    // Skills section
    cy.get('section:contains("Product Design")').screenshot('skills-section', { overwrite: true });
    
    // Gallery section
    cy.get('#work').screenshot('gallery-section', { overwrite: true });
    
    // Testimonial section
    cy.get('section:contains("Testimonial")').screenshot('testimonial-section', { overwrite: true });
    
    // Contact section
    cy.get('#contact').screenshot('contact-section', { overwrite: true });
    
    cy.log('Sectional screenshots taken for detailed comparison with Figma design');
  });
}); 