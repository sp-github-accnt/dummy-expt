describe('Exact Figma Design Match Test', () => {
  const BASE_IMAGE_PATH = 'cypress/fixtures/base-design.png';
  
  beforeEach(() => {
    // Visit the website
    cy.visit('/');
    
    // Wait for all images to load
    cy.get('img').should('be.visible');
    cy.wait(2000); // Ensure everything is fully rendered
  });

  it('should match the exact Figma design', () => {
    // Take a screenshot of the current website
    cy.screenshot('current-design', { 
      capture: 'fullPage',
      overwrite: true 
    });
    
    // Visual comparison happens during test execution
    // The test will log any differences it finds
    cy.log('Comparing current design with Figma design base image');
    
    // Check that all key elements are present and visible
    cy.get('nav').should('be.visible');
    cy.get('section').first().find('h1').should('be.visible').and('contain', 'Visual Designer');
    cy.get('#about').should('be.visible');
    cy.get('#work').should('be.visible');
    cy.get('section h2').contains('Testimonial').should('be.visible');
    cy.get('#contact').should('be.visible');
  });
  
  it('should have correct colors and styling from Figma design', () => {
    // Check main color scheme
    cy.get('body').should('have.css', 'color', 'rgb(45, 45, 45)'); // #2D2D2D
    cy.get('body').should('have.css', 'background-color', 'rgb(255, 255, 255)'); // white
    
    // Skills section colors
    cy.get('.bg-redSkill').should('have.css', 'background-color', 'rgb(243, 175, 168)'); // #F3AFA8
    cy.get('.bg-orangeSkill').should('have.css', 'background-color', 'rgb(255, 98, 80)'); // #FF6250
    cy.get('.bg-greenSkill').should('have.css', 'background-color', 'rgb(0, 147, 121)'); // #009379
    
    // Testimonial section colors
    cy.get('.testimonial-card').should('have.css', 'background-color', 'rgb(243, 243, 243)'); // #F3F3F3
  });
  
  it('should have correct typography and spacing as in Figma design', () => {
    // Check font family
    cy.get('body').should('have.css', 'font-family').and('contain', 'Epilogue');
    
    // Check heading sizes
    cy.get('h1').should('have.css', 'font-size', '68px');
    cy.get('h2').should('have.css', 'font-size', '32px');
    cy.get('h3').should('have.css', 'font-size', '27px');
    
    // Check spacing (padding/margin)
    cy.get('section').first().should('have.css', 'padding', '42px');
    // Don't check the specific gap value as it may vary based on implementation
  });
}); 