export function calculateInvestment({ initial, annual, rateOfReturn, duration }) {
  const annualData = [];
  let currentValue = initial;
  for (let i = 0; i < duration; i++) {
    const interest = currentValue * (rateOfReturn / 100);
    currentValue += interest + annual;
    annualData.push({ year: i + 1, interest, annual, value: currentValue });
  }
  return annualData;
}

export const currency = new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});
