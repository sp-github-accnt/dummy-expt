describe('Figma Visual Comparison Test', () => {
  beforeEach(() => {
    // Visit the page
    cy.visit('/');
    
    // Wait for all images to load
    cy.get('img').should($imgs => {
      // Check if all images have been loaded
      $imgs.each((i, img) => {
        expect(img.complete).to.be.true;
      });
    });
  });

  it('should match the Figma design visually', () => {
    // Full page comparison
    cy.compareWithFigma();
  });
  
  it('should compare each section individually', () => {
    // Navigation section
    cy.get('nav').compareSnapshot('navigation-section');
    
    // Header section
    cy.get('section').first().compareSnapshot('header-section');
    
    // Logo bar
    cy.get('section').eq(1).compareSnapshot('logo-bar-section');
    
    // Skills section
    cy.get('#about').compareSnapshot('skills-section');
    
    // Gallery section
    cy.get('#work').compareSnapshot('gallery-section');
    
    // Testimonial section
    cy.contains('h2', 'Testimonial').parent('section').compareSnapshot('testimonial-section');
    
    // Contact section
    cy.get('#contact').compareSnapshot('contact-section');
  });
}); 