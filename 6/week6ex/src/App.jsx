import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import React from "react";
function App() {
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState("My App Title");
  function updateTitle() {
    setTitle("this is a " + Math.random());
    console.log(Math.random());
  }
  return (
    <div>
      <button onClick={updateTitle}>Change the title</button>

      <Header title={title} />
      <Header title="My App title 2" />
      <Header title="My App title 3" />
      <Header title="My App title 4" />
    </div>
  );
}
//memo only parent re-renders and updated child. less rendering time
const Header = React.memo(function Header({ title }) {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
})

export default App;
