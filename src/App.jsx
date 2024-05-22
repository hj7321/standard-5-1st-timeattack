import { useState } from "react";

export default function App() {
  const [number, setNumber] = useState("0");
  const [newNumber, setNewNumber] = useState("");

  const addNumber = () => {
    setNumber((prev) => String(+prev + +newNumber));
  };

  const subNumber = () => {
    setNumber((prev) => String(+prev - +newNumber));
  };

  const initNumber = () => {
    setNumber((prev) => (prev = "0"));
    setNewNumber((prev) => (prev = ""));
  };

  return (
    <div>
      <h1>덧셈과 뺄셈이 가능한 앱 만들기</h1>
      <div>
        <input
          value={newNumber}
          onChange={(e) => setNewNumber(e.target.value)}
        />{" "}
        만큼을 <button onClick={addNumber}>더할게요</button>{" "}
        <button onClick={subNumber}>뺄게요</button>
        <button onClick={initNumber}>초기화</button>
      </div>
      <hr />
      <div>
        <h3>결과</h3>
        <p>{number}</p>
      </div>
    </div>
  );
}
