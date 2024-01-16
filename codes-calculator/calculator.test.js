// calculator.test.js

const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');
const { checkboxStateChanged } = require('./calculator');

// Read the HTML content from index.html
const htmlPath = path.resolve(__dirname, 'index.html');
const htmlContent = fs.readFileSync(htmlPath, 'utf-8');

// Set up jsdom environment
const dom = new JSDOM(htmlContent, { runScripts: 'dangerously' });
global.document = dom.window.document;

describe('checkboxStateChanged', () => {

  test('it should calculate code, binary, and decimal values based on checkbox state', () => {
    // Sample scenario: Check some checkboxes
    document.getElementById('s1').checked = true;
    document.getElementById('s3').checked = true;
    document.getElementById('u2').checked = true;
    document.getElementById('u5').checked = true;

    checkboxStateChanged('result');

    const codeResult = document.getElementById('codeResult').innerText;
    expect(codeResult).toMatch(/^Code: 1111101101[F0] 111111010[F0]$/);

    const binaryResult = document.getElementById('binaryResult').innerText;
    expect(binaryResult).toBe('Binary ON: 111111010000101 111111010000000');
    
    const decimalResult = document.getElementById('decimalResult').innerText;
    expect(decimalResult).toBe('Decimal ON: 8101 Decimal OFF: 8064');
  });
});
