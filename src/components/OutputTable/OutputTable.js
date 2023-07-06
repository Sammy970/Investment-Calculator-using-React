import React from "react";
import styles from "./OutputTable.module.css";

const OutputTable = ({ yearData, initalInvestment }) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <table className={styles.result}>
      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {yearData.map((data) => {
          return (
            <tr key={data.year}>
              <td>{data.year}</td>
              <td>{formatter.format(data.savingsEndOfYear)}</td>
              <td>{formatter.format(data.yearlyInterest)}</td>
              <td>
                {formatter.format(
                  data.savingsEndOfYear -
                    initalInvestment -
                    data.yearlyContribution * data.year
                )}
              </td>
              <td>
                $
                {formatter.format(
                  Number(initalInvestment) + data.yearlyContribution * data.year
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default OutputTable;
