import React, { useState } from "react";
import "./App.css";

function App() {
  const [prev, setPrev] = useState("");
  const [cur, setCur] = useState("");
  const [operator, setOperator] = useState("");

  const inputNum = (e) => {
    if (cur.includes(".") && e.target.value === ".") return;
    cur ? setCur((prev) => prev + e.target.value) : setCur(e.target.value);
  };

  const handleOperator = (e) => {
    setOperator(e.target.value);
    if (cur === "") return;
    if (prev !== "") calculate();
    else {
      setPrev(cur);
      setCur("");
    }
  };

  const calculate = () => {
    let cal;
    switch (operator) {
      case "/":
        cal = String(parseFloat(prev) / parseFloat(cur));
        break;

      case "+":
        cal = String(parseFloat(prev) + parseFloat(cur));
        break;
      case "X":
        cal = String(parseFloat(prev) * parseFloat(cur));
        break;
      case "-":
        cal = String(parseFloat(prev) - parseFloat(cur));
        break;
      default:
        return;
    }

    setPrev(cal);
    setCur("");
  };

  const reset = () => {
    setCur("");
    setPrev("");
    setOperator("");
  };
  const buttonsArray = [];
  for (let i = 0; i <= 9; i++) {
    buttonsArray.push(i);
  }
  buttonsArray.push(".");

  const ops = ["+", "-", "X", "/"];
  return (
    <div className="container glass">
      <div className="display">
        {cur ? (
          <div > {cur}</div>
        ) : (
          <div > {prev}</div>
        )}
        <span className="operator">{operator}</span>
      </div>
      <div className="buttons-num">
        <button value="AC" className="btn btn-green" onClick={reset}>
          {" "}
          AC
        </button>
        {ops.map((el) => (
          <button value={el} className="btn" onClick={handleOperator}>
            {el}
          </button>
        ))}
        {buttonsArray.map((el) => (
          <button value={el} className="btn" onClick={inputNum}>
            {el}
          </button>
        ))}
        <button value="=" className="btn btn-green" onClick={calculate}>
          {/* {" "} */}
          =
        </button>
      </div>
    </div>
  );
}

export default App;
