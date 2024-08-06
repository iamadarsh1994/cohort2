import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'
import axios from "axios"
function App() {
  
  const [todos, setTodos] = useState([])
  //fetch("https://sum-server.100xdevs.com/todos").then(async function (res) {
  //   const json = await res.json();
  //   setTodos(json.todos);
  // }) or axios
useEffect(()=>{
  axios.get("https://sum-server.100xdevs.com/todos").then( function (response) {
    setTodos(response.data.todos);
  })
}, [])
//u can use the as many useEffect as you want 
  return (
    <div>
     {todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description} />)}
    </div>
  )
}
function Todo({title, description}){
return <div>
  <h1>{title}</h1>
  <h4>{description}</h4>
</div>
}
export default App
