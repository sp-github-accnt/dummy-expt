// Import the image snapshot command
import { addMatchImageSnapshotCommand } from 'cypress-image-diff-js/dist/command';

// Add the image snapshot command
addMatchImageSnapshotCommand();

// Configure the snapshot behavior
Cypress.Commands.add('compareSnapshot', (name, options = {}) => {
  // Merge default options with provided options
  const defaultOptions = {
    failureThreshold: 0.01, // 1% threshold
    failureThresholdType: 'percent',
    capture: 'fullPage',
  };
  
  const mergedOptions = { ...defaultOptions, ...options };
  
  // Take the snapshot
  cy.matchImageSnapshot(name, mergedOptions);
});

// Custom command to set up the full-page comparison
Cypress.Commands.add('compareWithFigma', (options = {}) => {
  // Ensure the page is fully loaded
  cy.wait(2000);
  
  // Capture a full-page screenshot and compare with the Figma design
  cy.compareSnapshot('full-page', {
    ...options,
    // Other configurations if needed
  });
}); 