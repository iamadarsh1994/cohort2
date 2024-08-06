import { useState } from "react";
import { useEffect } from "react";
import { useMemo } from "react";
// function App() {
//   const [count, setCount] = useState(0);
//   const [inputValue, setInputValue] = useState("");
//   // const [sum, setSum] = useState(0);

//   const calculateSum = (num) => {
//     let total = 0;
//     for (let i = 1; i <= num; i++) {
//       total += i;
//     }
//     return total;
//   };

// useEffect to update the sum whenever the input value changes
// useEffect(() => {
//   const num = parseInt(inputValue, 10);
//   if (!isNaN(num) && num > 0) {
//     setSum(calculateSum(num));
//   } else {
//     setSum(0);
//   }
// }, [inputValue]);
// Memoize the sum calculation
//  const sum = useMemo(() => {
//   const num = parseInt(inputValue, 10);
//   if (!isNaN(num) && num > 0) {
//     return calculateSum(num);
//   } else {
//     return 0;
//   }
// }, [inputValue]);
//   return (
//     <div>
//       <button onClick={() => setCount((count) => count + 1)}>
//         Counter {count}
//       </button>
//       <br /> <br />
//       <input
//         value={inputValue}
//         type="number"
//         placeholder="type any number"
//         onChange={(e) => setInputValue(e.target.value)}
//       ></input>
//       <p>Sum is {sum}</p>
//     </div>
//   );
// }
//kirat
function App() {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState(1);

  let count = useMemo(() => {
    let finalCount = 0;
    for (let i = 0; i <= inputValue; i++) {
      finalCount = finalCount + i;
    }
    return finalCount;
  }, [inputValue]);
  return (
    <div>
      <input
        onChange={function (e) {
          setInputValue(e.target.value);
        }}
        placeholder={"Find sum from 1 to n"}
      ></input>
      <br />
      Sum from 1 to {inputValue} is {count}
      <br />
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Counter({counter})
      </button>
    </div>
  );
}
export default App;
