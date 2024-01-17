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
    unitCode += checkbox.checked ? '0' : 'F';
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
  const cONs = Array.from(el.getElementsByClassName('codeResultON'));
  const cOFFs = Array.from(el.getElementsByClassName('codeResultOFF'));

  const bONs = Array.from(el.getElementsByClassName('binaryResultON'));
  const bOFFs = Array.from(el.getElementsByClassName('binaryResultOFF'));

  const dONs = Array.from(el.getElementsByClassName('decimalResultON'));
  const dOFFs = Array.from(el.getElementsByClassName('decimalResultOFF'));

  cONs.forEach(function(div) {
      div.innerHTML = codeON;
  });
  cOFFs.forEach(function(div) {
      div.innerHTML = codeOFF;
  });

  bONs.forEach(function(div) {
      div.innerHTML = binaryON;
  });
  bOFFs.forEach(function(div) {
      div.innerHTML = binaryOFF;
  });

  dONs.forEach(function(div) {
      div.innerHTML = decimalON;
  });
  dOFFs.forEach(function(div) {
      div.innerHTML = decimalOFF;
  });
}

// Export for testing
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = { checkboxStateChanged };
}


