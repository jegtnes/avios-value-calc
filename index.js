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

//     11500 Avios + £ 135.00
function getCashValueFromString(string) {
  const regex = new RegExp(/£\s?(\d*\.?\d*)/);
  const result = regex.exec(string);
  console.log(result);
  return Math.round(result[1]);
}

console.log(getCashValueFromString("11500 Avios + £ 135.00"));

// function getAviosValueFromString(string) {}

console.log(aviosToCash(25000, VALUE_TRESHOLDS.TWO.value));
console.log(aviosToCash(25000, VALUE_TRESHOLDS.HFP.value));
console.log(aviosToCash(25000, VALUE_TRESHOLDS.AMEX.value));
