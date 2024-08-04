import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

function App() {
  const [todos, setTodos] = useState([])
//u can write fetch and .then then into json, from backend(wrong way infinite loop)
  return (
    <div>
<CreateTodo></CreateTodo>
<Todos todos={todos}></Todos>
    </div>
  )
}

export default App
