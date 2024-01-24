import { useState } from "react";
import Header from "./components/Header";
import ResultTable from "./components/ResultTable";
import UserInput from "./components/UserInput";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserInput((preUserInput) => {
      return {
        ...preUserInput,
        [name]: +value,
      };
    });
  };

  const inputIsValid = userInput.duration >= 1;

  return (
    <>
      <Header />
      <UserInput onChange={handleInputChange} userInput={userInput} />
      {!inputIsValid && <p className="center">Please enter a duration greater than zero.</p>}
      {inputIsValid && <ResultTable input={userInput} />}
    </>
  );
}

export default App;
