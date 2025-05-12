describe('Figma Design Match Test', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should have the correct navigation structure', () => {
    cy.get('nav').should('exist');
    cy.get('nav').contains('Logo');
    cy.get('nav a').should('have.length', 3);
    cy.get('nav a').contains('About');
    cy.get('nav a').contains('Work');
    cy.get('nav a').contains('Contact');
  });

  it('should have the correct header section', () => {
    cy.get('section').first().within(() => {
      cy.contains('Branding | Image making');
      cy.contains('Visual Designer');
      cy.contains('This is a template Figma file');
      cy.get('a').contains('Contact');
      cy.get('div[style*="background-image: url"]').should('exist');
    });
  });

  it('should have the logo bar with all logos', () => {
    cy.get('section').eq(1).within(() => {
      cy.get('img').should('have.length', 5);
    });
  });

  it('should have the skills section with three skills', () => {
    cy.get('#about').within(() => {
      cy.get('div.flex-1').should('have.length', 3);
      cy.contains('Product Design');
      cy.contains('Visual Design');
      cy.contains('Art Direction');
    });
  });

  it('should have the gallery section with six projects', () => {
    cy.get('#work').within(() => {
      cy.contains('Latest work');
      cy.get('div.flex-1').should('have.length', 6);
      cy.contains('Project title').should('exist');
      cy.contains('UI, Art direction').should('exist');
    });
  });

  it('should have the testimonial section', () => {
    cy.contains('Testimonial').should('exist');
    cy.contains('Gemma Nolen').should('exist');
    cy.contains('Google').should('exist');
  });

  it('should have the contact section with form', () => {
    cy.get('#contact').within(() => {
      cy.contains('Lets work together');
      cy.get('input[type="text"]').should('exist');
      cy.get('input[type="email"]').should('exist');
      cy.get('button').contains('Submit');
      cy.get('a').should('have.length', 5); // social icons
      cy.get('img').should('have.length', 5); // social icons images
    });
  });

  it('should have responsive design that matches the Figma mockup', () => {
    // Check desktop layout
    cy.viewport(1280, 800);
    cy.get('nav').should('have.css', 'flex-direction', 'row');
    
    // Check tablet layout
    cy.viewport(768, 1024);
    cy.get('#work .flex-1').should('have.css', 'min-width', '300px');
    
    // Check mobile layout
    cy.viewport(375, 667);
    cy.get('nav').should('exist');
  });
}); 