import { useState } from "react";

export default function App() {
  const [number, setNumber] = useState("");

  const addNumber = (e) => {
    console.log(e.target.value);
    setNumber((prev) => String(+prev + +number));
  };

  const subNumber = () => {
    setNumber((prev) => String(+prev - +number));
  };

  const initNumber = () => {
    setNumber((prev) => (prev = "0"));
  };

  return (
    <div>
      <h1>덧셈과 뺄셈이 가능한 앱 만들기</h1>
      <div>
        <input /> 만큼을 <button onClick={addNumber}>더할게요</button>{" "}
        <button onClick={subNumber}>뺄게요</button>
        <button onClick={initNumber}>초기화</button>
      </div>
      <hr />
      <div>
        <h3>결과</h3>
        <p>{number === "" ? "0" : number}</p>
      </div>
    </div>
  );
}
