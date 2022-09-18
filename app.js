// https://www.omnicalculator.com/conversion/pounds-to-ounces-converter

const v =  document.getElementById('v');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const ouncesRadio = document.getElementById('ouncesRadio');
const poundsRadio = document.getElementById('poundsRadio');

let ounces;
let pounds = v; 

// labels of the inpust
const variable = document.getElementById('variable');

ouncesRadio.addEventListener('click', function() {
  variable.textContent = 'Pounds';
  pounds = v;
  result.textContent = '';
});

poundsRadio.addEventListener('click', function() {
  variable.textContent = 'Ounces';
  ounces = v;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(ouncesRadio.checked)
    result.textContent = `Ounces = ${computeounces().toFixed(5)}`;

  else if(poundsRadio.checked)
    result.textContent = `Pounds = ${computepounds().toFixed(5)}`;
})

// calculation

function computeounces() {
  return Number(pounds.value) * 16;
}

function computepounds() {
  return Number(ounces.value) / 16;
}