// calculator.js

function checkboxStateChanged(resultId) {
  const systemCodeCheckboxes = document.querySelectorAll('#systemCode input[type="checkbox"]');
  const unitCodeCheckboxes = document.querySelectorAll('#unitCode input[type="checkbox"]');

  let systemCode = '';
  let unitCode = '';

  systemCodeCheckboxes.forEach(checkbox => {
    systemCode += checkbox.checked ? '1' : 'F';
  });

  unitCodeCheckboxes.forEach(checkbox => {
    unitCode += checkbox.checked ? 'F' : '0';
  });

  // Combine both codes to form the final code
  const code = systemCode + unitCode;

  // Display the code value
  document.getElementById(resultId).innerText = `Code: ${code}0F ${code}F0`;

  // Convert tri-state to binary for both variants
  const codeON = `${code}F0`;
  const codeOFF = `${code}0F`;

  // Define conversion table for tri-state to binary
  const triStateToBinary = { '00': '0', '11': '1', 'F': '01' };

  const binaryON = codeON.replace(/00|11|F/g, m => triStateToBinary[m]);
  const binaryOFF = codeOFF.replace(/00|11|F/g, m => triStateToBinary[m]);

  // Convert binary to decimal
  const decimalON = parseInt(binaryON, 2);
  const decimalOFF = parseInt(binaryOFF, 2);

  // Do not modify these lines
  document.getElementById('binaryResult').innerText = `Binary ON: ${binaryON} Binary OFF: ${binaryOFF}`;
  document.getElementById('decimalResult').innerText = `Decimal ON: ${decimalON} Decimal OFF: ${decimalOFF}`;
}

// Export for testing
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = { checkboxStateChanged };
}


