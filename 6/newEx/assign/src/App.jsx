import { useEffect, useState } from "react";
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

// function App() {
//   return (
//     <div>
//       <CardWrapper>Hi There</CardWrapper>
//       <CardWrapper>Hi There 2</CardWrapper>
//       <CardWrapper>Hello Hello</CardWrapper>
//       <CardWrapper>
//         <TextComponent />
//       </CardWrapper>
//     </div>
//   );
// }

// function CardWrapper({ children }) {
//   return (
//     <div style={{ border: "2px solid black", padding: "20px" }}>{children}</div>
//   );
// }

// function TextComponent() {
//   return <div>Hi there from text Component</div>;
// }
//
// function App(){
//   useEffect(function(){
//     alert("hi")
//   }, [])
//   return <div>
//     hi there a
//   </div>
// }

//
function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setInterval(()=>{
      fetch("https://sum-server.100xdevs.com/todos").then(async function (res) {
        const json = await res.json();
        setTodos(json.todos);
      });
  
    }, 10000)
  }, []);

  return (
    <div>
      {todos.map((todo) => (
        <Todo key={todo.id} title={todo.title} description={todo.description} />
      ))}
    </div>
  );
}

function Todo({ title, description }) {
  return <div>
    <h1>{title}</h1>
    <h4>{description}</h4>
  </div>;
}
export default App;
