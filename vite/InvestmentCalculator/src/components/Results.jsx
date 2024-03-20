import { calculateInvestment, currency } from '../util/investment';

export default function Results({ investment }) {
  const results = calculateInvestment(investment);
  return (
    <table id='result'>
      <thead>
        <tr>
          <th>Year</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Investment Value</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {results.map(({ year, interest, annual, value }) => {
          const totalInterest = value - annual * year - investment.initial;
          return (
            <tr key={year}>
              <td>{year}</td>
              <td>{currency.format(interest)}</td>
              <td>{currency.format(totalInterest)}</td>
              <td>{currency.format(value)}</td>
              <td>{currency.format(value - totalInterest)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
