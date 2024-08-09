import { useContext, useState } from "react";
import { CountContext } from "./components/context";
//reducer/useReducer
//here use of context api, it get rids of props aka prop drilling, 
//pass the context api in any child you want to render it.
function App() {
  const [count, setCount] = useState(0);
  //wrap anyone that wants to use the teleported value inside a provider
  return (
    <div>
      <CountContext.Provider value={count}>
        <Count count={count} setCount={setCount} />
      </CountContext.Provider>
    </div>
  );
}
function Count({ setCount }) {
  return (
    <div>
      <CountRenderer />

      <Buttons setCount={setCount} />
    </div>
  );
}
function CountRenderer() {
  const count = useContext(CountContext);
  return <div>{count}</div>;
}
function Buttons({ setCount }) {
  const count = useContext(CountContext);
  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrement
      </button>
    </div>
  );
}
export default App;
