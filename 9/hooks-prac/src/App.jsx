import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import axios from 'axios'
import DarkModeToggle from './components/DarkModeToggle'
//customHooks 
// function useInterval(fn, timeout){
//    useEffect(()=>{
//     setInterval(()=>{
//       fn()
//     }, timeout)
//     return ()=> {
//       clearInterval(int)
//     }
//    }, [])
// }

function App() {
  // const [count, setCount] = useState(0);

  // useInterval(() => {
  //   setCount(c => c + 1);
  // }, 1000)

  return (
    <>
      Timer is at
      <DarkModeToggle />
    </>
  )
}

export default App
