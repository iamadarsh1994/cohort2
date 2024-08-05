import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// create the cardwrapper so it takes a component inside it as card.

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <CardWrapper innerComponent={<TextComponent />} />
//     </>
//   )
// }
// function TextComponent(){
//   return <div>
//     hi there
//   </div>
// }
// function CardWrapper ({innerComponent}){
//   //create a div which has a border (hint: border: "2px solid black")
//   //and inside the div renders the prop
//   return <div style={{border: "2px solid black", padding: "20px"}}>{innerComponent}</div>
// }

//or
function App() {
  return (
    <div>
      <CardWrapper>Hi There</CardWrapper>
      <CardWrapper>Hi There 2</CardWrapper>
      <CardWrapper>Hello Hello</CardWrapper>
      <CardWrapper>
        <TextComponent />
      </CardWrapper>
    </div>
  );
}

function CardWrapper({ children }) {
  return (
    <div style={{ border: "2px solid black", padding: "20px" }}>{children}</div>
  );
}
function TextComponent() {
  return <div>Hi there from text Component</div>;
}
export default App;
