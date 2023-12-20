const VALUE_TRESHOLDS = [
  {
    name: "2p/Avios",
    value: 200,
  },
  {
    name: "1.5p/Avios",
    value: 150,
  },
  {
    name: "1p/Avios (HeadForPoints valuation)",
    value: 100,
  },
  {
    name: "0.67p/Avios (Nectar points used for shopping)",
    value: 67,
  }, 
  {
    name: "0.5p/Avios (Amex statement credit)",
    value: 50,
  },
  {
    name: "Custom valuation",
    value: 0,
  }
];

function calculateTotalValue(string, value) {
  return (
    getCashFromString(string) + aviosToCash(getAviosFromString(string), value)
  );
}

function aviosToCash(avios, valuePerPence) {
  return Math.round((avios * valuePerPence) / 100 / 100);
}

function parseText(text) {
  return text.split("\n").map((line) => line.trim());
}

function getCashFromString(string) {
  const regex = new RegExp(/£\s?(\d*\.?\d*)/);
  const result = regex.exec(string);
  return Math.round(result[1]);
}

function getAviosFromString(string) {
  const regex = new RegExp(/^(\d*) Avios/);
  const result = regex.exec(string);
  return Math.round(result[1]);
}

module.exports = {
  VALUE_TRESHOLDS,
  calculateTotalValue,
  parseText,
}