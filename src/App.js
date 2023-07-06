import { useState } from "react";
import Header from "./components/Header/Header";
import InputForm from "./components/InputForm/InputForm";
import OutputTable from "./components/OutputTable/OutputTable";

function App() {
  const [userInput, setUserInput] = useState();
  const [yearData, setYearData] = useState([]);

  const calculateHandler = (userInput) => {
    const yearlyData = []; // per-year results

    let currentSavings = +userInput["current-savings"];
    const yearlyContribution = +userInput["yearly-contribution"];
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
    return yearlyData;
  };

  const getUserData = (userDataInput) => {
    setUserInput(userDataInput);
    setYearData(calculateHandler(userDataInput));
  };

  return (
    <div>
      <Header />

      <InputForm getUserData={getUserData} />

      {!userInput && <p>No Investment Calculated</p>}

      {userInput && (
        <OutputTable
          yearData={yearData}
          initalInvestment={userInput["current-savings"]}
        />
      )}
    </div>
  );
}

export default App;
