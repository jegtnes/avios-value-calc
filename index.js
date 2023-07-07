const VALUE_TRESHOLDS = {
  TWO: {
    name: "2p/Avios",
    value: 200,
  },
  ONE_POINT_FIVE: {
    name: "1.5p/Avios",
    value: 150,
  },
  HFP: {
    name: "1p/Avios (HeadForPoints valuation)",
    value: 100,
  },
  NECTAR: {
    name: "0.67p/Avios (Nectar points used for shopping)",
    value: 67,
  }, 
  AMEX: {
    name: "0.5p/Avios (Amex statement credit)",
    value: 50,
  },
  CUSTOM: {
    name: "Custom valuation",
    value: 0,
  }
}

function aviosToCash(avios, valuePerPence) {
  return Math.round(avios / valuePerPence);
}

function parseText(text) {
  return text.split("\n").map((line) => line.trim());
}

//     11500 Avios + £ 135.00
function getCashFromString(string) {
  const regex = new RegExp(/£\s?(\d*\.?\d*)/);
  const result = regex.exec(string);
  return Math.round(result[1]);
}

console.log(getCashFromString("11500 Avios + £ 135.00"));

function getAviosFromString(string) {
  const regex = new RegExp(/^(\d*) Avios/);
  const result = regex.exec(string);
  return Math.round(result[1]);
}

console.log(getAviosFromString("11500 Avios + £ 135.00"));

console.log(aviosToCash(25000, VALUE_TRESHOLDS.TWO.value));
console.log(aviosToCash(25000, VALUE_TRESHOLDS.HFP.value));
console.log(aviosToCash(25000, VALUE_TRESHOLDS.AMEX.value));

console.log(
  parseText(`    31000 Avios + £ 9.00
26500 Avios + £ 25.00
19500 Avios + £ 50.00
14500 Avios + £ 95.00
11500 Avios + £ 135.00`).forEach((l) => {
    console.log(getCashFromString(l));
    console.log(getAviosFromString(l));
  })
);