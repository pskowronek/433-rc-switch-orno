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


  // Convert tri-state to binary for both variants
  const codeON = `${code}F0`;
  const codeOFF = `${code}0F`;

  // Define conversion table for tri-state to binary
  const triStateToBinary = { '0': '00', '1': '11', 'F': '01' };

  const binaryON = codeON.replace(/0|1|F/g, m => triStateToBinary[m]);
  const binaryOFF = codeOFF.replace(/0|1|F/g, m => triStateToBinary[m]);

  // Convert binary to decimal
  const decimalON = parseInt(binaryON, 2);
  const decimalOFF = parseInt(binaryOFF, 2);

  const el = document.getElementById(resultId);

  // Display the code value and others.......
  const c = el.getElementsByClassName('codeResult')[0];
  const b = el.getElementsByClassName('binaryResult')[0];
  const d = el.getElementsByClassName('decimalResult')[0];

  c.innerText = `Code ON: ${codeON} Code OFF: ${codeOFF}`;
  b.innerText = `Binary ON: ${binaryON} Binary OFF: ${binaryOFF}`;
  d.innerText = `Decimal ON: ${decimalON} Decimal OFF: ${decimalOFF}`
}

// Export for testing
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = { checkboxStateChanged };
}


