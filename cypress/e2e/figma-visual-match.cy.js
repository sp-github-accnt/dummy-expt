describe('Figma Visual Comparison Test', () => {
  beforeEach(() => {
    // Visit the website
    cy.visit('/');
    
    // Wait for all images to load
    cy.get('img').should('be.visible');
    cy.wait(1000); // Additional wait to ensure everything renders
  });

  it('should capture a full page screenshot for comparison with Figma design', () => {
    // Take a screenshot of the full page
    cy.screenshot('full-page-screenshot', { 
      capture: 'fullPage',
      overwrite: true 
    });
  });

  it('should visually match the layout structure of the Figma design', () => {
    // Check for all the main sections from the Figma design
    cy.get('nav').should('exist');
    cy.get('section').first().find('h1').contains('Visual Designer');
    cy.get('#about').should('exist');
    cy.get('#work').should('exist');
    cy.get('section').contains('h2', 'Testimonial').should('exist');
    cy.get('#contact').should('exist');
    
    // Check that there are no unexpected elements or sections
    cy.get('body > *').should('have.length.lte', 10); // Rough check that we don't have extra elements
  });

  it('should have the correct color scheme matching the Figma design', () => {
    // Check main color values from the Figma design
    cy.get('body').should('have.css', 'color', 'rgb(45, 45, 45)'); // darkGray text
    cy.get('body').should('have.css', 'background-color', 'rgb(255, 255, 255)'); // white bg
    
    // Check skill card colors
    cy.get('.bg-redSkill').should('exist');
    cy.get('.bg-orangeSkill').should('exist');
    cy.get('.bg-greenSkill').should('exist');
  });

  it('should have correctly sized elements matching the Figma design', () => {
    // Check that the nav is full width
    cy.get('nav').should('have.css', 'width', '1280px');
    
    // Check header spacing
    cy.get('section').first().should('have.css', 'padding-top').and('not.equal', '0px');
    cy.get('section').first().should('have.css', 'padding-bottom').and('not.equal', '0px');
    
    // Check font sizes for key elements
    cy.get('h1').should('have.css', 'font-size', '60px');
    cy.get('h2').should('have.css', 'font-size', '30px');
  });
}); 