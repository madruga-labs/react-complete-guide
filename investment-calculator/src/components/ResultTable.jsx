import { calculateInvestmentResults, formatter } from "../util/investment";

export default function ResultTable({ input }) {
  const resultsData = calculateInvestmentResults(input);
  const innitialInvestment =
    resultsData[0].valueEndOfYear -
    resultsData[0].interest -
    resultsData[0].annualInvestment;

  return (
    <div id="result">
      <table width="100%">
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {resultsData.map((yearData) => {
            const totalInterest =
              yearData.valueEndOfYear -
              yearData.annualInvestment * yearData.year -
              innitialInvestment;

            const totalAmmountInvested = yearData.valueEndOfYear - totalInterest;

            return (
              <tr key={yearData.year}>
                <td>{yearData.year}</td>
                <td>{formatter.format(yearData.valueEndOfYear)}</td>
                <td>{formatter.format(yearData.interest)}</td>
                <td>{formatter.format(totalInterest)}</td>
                <td>{formatter.format(totalAmmountInvested)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
