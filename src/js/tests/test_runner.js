/**
 * test_runner.js - Runs the test suite for the GCSE Digital Technology text adventure game
 * 
 * This file provides a simple interface to run the tests and display the results.
 */

class TestRunner {
  /**
   * Constructor for the TestRunner
   */
  constructor() {
    this.testSuite = new TestSuite();
    this.setupUI();
  }

  /**
   * Sets up the UI for the test runner
   */
  setupUI() {
    // Create test runner container
    const container = document.createElement('div');
    container.id = 'testRunnerContainer';
    container.style.padding = '20px';
    container.style.backgroundColor = '#f5f5f5';
    container.style.borderRadius = '5px';
    container.style.margin = '20px 0';
    container.style.fontFamily = 'monospace';
    
    // Create header
    const header = document.createElement('h2');
    header.textContent = 'GCSE Digital Technology Game Test Runner';
    container.appendChild(header);
    
    // Create run button
    const runButton = document.createElement('button');
    runButton.textContent = 'Run All Tests';
    runButton.style.padding = '10px 20px';
    runButton.style.backgroundColor = '#4CAF50';
    runButton.style.color = 'white';
    runButton.style.border = 'none';
    runButton.style.borderRadius = '4px';
    runButton.style.cursor = 'pointer';
    runButton.style.marginBottom = '20px';
    runButton.onclick = () => this.runTests();
    container.appendChild(runButton);
    
    // Create results container
    const resultsContainer = document.createElement('div');
    resultsContainer.id = 'testResults';
    container.appendChild(resultsContainer);
    
    // Add to document
    document.body.appendChild(container);
  }

  /**
   * Runs all tests and displays the results
   */
  async runTests() {
    const resultsContainer = document.getElementById('testResults');
    resultsContainer.innerHTML = '<p>Running tests...</p>';
    
    try {
      const results = await this.testSuite.runAllTests();
      this.displayResults(results);
    } catch (error) {
      resultsContainer.innerHTML = `<p style="color: red;">Error running tests: ${error.message}</p>`;
      console.error('Error running tests:', error);
    }
  }

  /**
   * Displays the test results
   * @param {Object} results - The test results
   */
  displayResults(results) {
    const resultsContainer = document.getElementById('testResults');
    
    // Create summary
    const summary = document.createElement('div');
    summary.innerHTML = `
      <h3>Test Results Summary</h3>
      <p>Total tests: ${results.total}</p>
      <p style="color: green;">Passed: ${results.passed}</p>
      <p style="color: red;">Failed: ${results.failed}</p>
      <p style="color: orange;">Skipped: ${results.skipped}</p>
    `;
    
    // Create details
    const details = document.createElement('div');
    details.innerHTML = '<h3>Test Details</h3>';
    
    const table = document.createElement('table');
    table.style.width = '100%';
    table.style.borderCollapse = 'collapse';
    
    // Create header row
    const headerRow = document.createElement('tr');
    headerRow.innerHTML = `
      <th style="text-align: left; padding: 8px; border-bottom: 1px solid #ddd;">Test</th>
      <th style="text-align: left; padding: 8px; border-bottom: 1px solid #ddd;">Result</th>
      <th style="text-align: left; padding: 8px; border-bottom: 1px solid #ddd;">Message</th>
    `;
    table.appendChild(headerRow);
    
    // Create rows for each test
    for (const test of results.details) {
      const row = document.createElement('tr');
      
      let resultText = '';
      let resultColor = '';
      
      if (test.skipped) {
        resultText = 'SKIPPED';
        resultColor = 'orange';
      } else if (test.passed) {
        resultText = 'PASSED';
        resultColor = 'green';
      } else {
        resultText = 'FAILED';
        resultColor = 'red';
      }
      
      row.innerHTML = `
        <td style="padding: 8px; border-bottom: 1px solid #ddd;">${test.name}</td>
        <td style="padding: 8px; border-bottom: 1px solid #ddd; color: ${resultColor};">${resultText}</td>
        <td style="padding: 8px; border-bottom: 1px solid #ddd;">${test.message || ''}</td>
      `;
      
      table.appendChild(row);
    }
    
    details.appendChild(table);
    
    // Clear and update results container
    resultsContainer.innerHTML = '';
    resultsContainer.appendChild(summary);
    resultsContainer.appendChild(details);
  }
}

// Initialize the test runner when the page loads
window.addEventListener('load', () => {
  const testRunner = new TestRunner();
});
