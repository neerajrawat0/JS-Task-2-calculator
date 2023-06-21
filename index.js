import { useEffect, useState, useRef } from "react";
import "./App.css";

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}

function App() {
  const [operand1, setoperand1] = useState("");
  const [operand2, setoperand2] = useState("");
  const [operator, setoperator] = useState("");
  const [operation, setoperation] = useState("");
  const o1 = usePrevious(operand1);
  const o2 = usePrevious(operand2);
  const o = usePrevious(operator);
  const ot = usePrevious(operation);

  const result = () => {
    var a = parseFloat(operand1);
    var b = parseFloat(operand2);
    var c = 0;
    switch (operator) {
      case "+":
        c = a + b;
        break;
      case "-":
        c = a - b;
        break;
      case "*":
        c = a * b;
        break;
      case "/":
        c = a / b;
        break;
      default:
    }
    if (isNaN(c)) setoperation("SYNTAX ERROR");
    else setoperation(c);
    setoperand2(c);
  };
  return (
    <div class="c p-5">
      <div class="b m-auto  mt-5">
        <div>
          <div class="a position-relative bg-dark-subtle rounded-top text-end p-4 fs-4">
            {operation}
          </div>
        </div>
        <table class="table text-center fs-5 w-100  text-bg-dark rounded-bottom">
          <tr>
            <td
              class=" bg-light w-25 rounded-end fs-6 "
              onClick={() => {
                setoperand1(o1);
                setoperand2(o2);
                setoperation(ot);
                setoperator(o);
              }}
            >
              <i class="fa-sharp fa-solid fa-delete-left"></i>
            </td>

            <td
              class=" bg-danger bg-gradient w-50 rounded"
              colSpan="2"
              onClick={() => {
                setoperation("");
                setoperand2("");
                setoperand1("");
              }}
            >
              CE
            </td>

            <td
              class="text-primary bg-gradient bg-black rounded"
              onClick={() => {
                setoperation(operation + "/");
                setoperand1(operand2);
                setoperand2(" ");
                setoperator("/");
              }}
            >
              /
            </td>
          </tr>
          <tr>
            <td
              onClick={() => {
                setoperation(operation + "7");
                setoperand2(operand2 + "7");
              }}
            >
              7
            </td>
            <td
              onClick={() => {
                setoperation(operation + "8");
                setoperand2(operand2 + "8");
              }}
            >
              8
            </td>
            <td
              onClick={() => {
                setoperation(operation + "9");
                setoperand2(operand2 + "9");
              }}
            >
              9
            </td>
            <td
              class="text-primary bg-gradient bg-black rounded"
              onClick={() => {
                setoperation(operation + "*");
                setoperand1(operand2);
                setoperand2(" ");
                setoperator("*");
              }}
            >
              *
            </td>
          </tr>
          <tr>
            <td
              onClick={() => {
                setoperation(operation + "4");
                setoperand2(operand2 + "4");
              }}
            >
              4
            </td>
            <td
              onClick={() => {
                setoperation(operation + "5");
                setoperand2(operand2 + "5");
              }}
            >
              5
            </td>
            <td
              onClick={() => {
                setoperation(operation + "6");
                setoperand2(operand2 + "6");
              }}
            >
              6
            </td>
            <td
              class="text-primary bg-gradient bg-black rounded-start"
              onClick={() => {
                setoperation(operation + "-");
                setoperand1(operand2);
                setoperand2(" ");
                setoperator("-");
              }}
            >
              -
            </td>
          </tr>
          <tr>
            <td
              onClick={() => {
                setoperation(operation + "1");
                setoperand2(operand2 + "1");
              }}
            >
              1
            </td>
            <td
              onClick={() => {
                setoperation(operation + "2");
                setoperand2(operand2 + "2");
              }}
            >
              2
            </td>
            <td
              onClick={() => {
                setoperation(operation + "3");
                setoperand2(operand2 + "3");
              }}
            >
              3
            </td>
            <td
              class="text-primary bg-gradient bg-black rounded"
              rowSpan="3"
              onClick={() => {
                setoperation(operation + "+");
                setoperand1(operand2);
                setoperand2(" ");
                setoperator("+");
              }}
            >
              +
            </td>
          </tr>
          <tr>
            <td
              onClick={() => {
                setoperation(operation + "0");
                setoperand2(operand2 + "0");
              }}
            >
              0
            </td>
            <td
              onClick={() => {
                setoperation(operation + ".");
                setoperand2(operand2 + ".");
              }}
            >
              .
            </td>
            <td onClick={result}>=</td>
          </tr>
        </table>
      </div>
    </div>
  );
}
export default App;
