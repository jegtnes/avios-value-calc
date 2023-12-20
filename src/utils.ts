const VALUE_TRESHOLDS:Array<object> = [
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

export function calculateTotalValue(string: string, value: number) {
  return (
    getCashFromString(string) + aviosToCash(getAviosFromString(string), value)
  );
}

function aviosToCash(avios: number, valuePerPence: number) {
  return Math.round((avios * valuePerPence) / 100 / 100);
}

export function parseText(text: string) {
  return text.split("\n").map((line) => line.trim());
}

function getCashFromString(string: string) {
  const regex = new RegExp(/£\s?(\d*\.?\d*)/);
  const result: any = regex.exec(string);
  return Math.round(result[1]);
}

function getAviosFromString(string: string) {
  const regex = new RegExp(/^(\d*) Avios/);
  const result: any = regex.exec(string);
  return Math.round(result[1]);
}
