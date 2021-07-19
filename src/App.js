import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [total, updateTotal] = useState("");
  const [amount, updateAmount] = useState("");
  const [twoThousand, updateTwoThousand] = useState(0);
  const [fiveHundred, updateFiveHundred] = useState(0);
  const [hundred, updateHundred] = useState(0);
  const [twenty, updateTwenty] = useState(0);
  const [ten, updateTen] = useState(0);
  const [five, updateFive] = useState(0);
  const [one, updateOne] = useState(0);

  function totalValue(event) {
    // console.log(event.target.value);
    updateTotal(event.target.value);
    // console.log(total);
  }
  function totalAmount(event) {
    // console.log(event.target.value);
    updateAmount(event.target.value);
    // console.log(amount);
  }
  function returnChange() {
    if (Number(total) > Number(amount)) {
      alert("you need to give more " + (total - amount));
    } else {
      let returnAmount = amount - total;
      updateTwoThousand(Math.floor(returnAmount / 2000));
      returnAmount = returnAmount % 2000;
      updateFiveHundred(Math.floor(returnAmount / 500));
      returnAmount = returnAmount % 500;
      updateHundred(Math.floor(returnAmount / 100));
      returnAmount = returnAmount % 100;
      updateTwenty(Math.floor(returnAmount / 20));
      returnAmount = returnAmount % 20;
      updateTen(Math.floor(returnAmount / 10));
      returnAmount = returnAmount % 10;
      updateFive(Math.floor(returnAmount / 5));
      returnAmount = returnAmount % 5;
      updateOne(Math.floor(returnAmount));
    }
  }

  function displayNext() {
    if (total !== 0 && total !== "") {
      document.querySelector("#amount").style.display = "Block";
    } else {
      alert("Enter a number");
    }
  }

  function generateOutput() {
    if (amount !== 0 && amount !== "") {
      document.querySelector("#output").style.display = "Block";
    }
  }
  return (
    <div className="App">
      <h1>💲Cash Register💲</h1>
      <h4>Enter the total amount</h4>
      <input
        type="number"
        min="0"
        onChange={(event) => totalValue(event)}
      ></input>
      <br></br>
      <button onClick={displayNext}>Next</button>
      <div id={"amount"}>
        <h4>Enter the amount received</h4>
        <input
          type="number"
          min="0"
          onChange={(event) => totalAmount(event)}
        ></input>
        <br></br>
        <button
          onClick={() => {
            returnChange();
            generateOutput();
          }}
        >
          Generate output
        </button>
      </div>
      <div id={"output"}>
        <table>
          <tr>
            <th className={"inital"}>Denominations</th>
            <th className={"elements"}>2000</th>
            <th className={"elements"}>500</th>
            <th className={"elements"}>100</th>
            <th className={"elements"}>20</th>
            <th className={"elements"}>10</th>
            <th className={"elements"}>5</th>
            <th className={"elements"}>1</th>
          </tr>
          <tr>
            <td className={"inital"}>Number of notes</td>
            <td className={"elements"}>{twoThousand}</td>
            <td className={"elements"}>{fiveHundred}</td>
            <td className={"elements"}>{hundred}</td>
            <td className={"elements"}>{twenty}</td>
            <td className={"elements"}>{ten}</td>
            <td className={"elements"}>{five}</td>
            <td className={"elements"}>{one}</td>
          </tr>
        </table>
      </div>
    </div>
  );
}
