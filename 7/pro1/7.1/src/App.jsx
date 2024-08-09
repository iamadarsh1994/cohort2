import { useState } from "react";
import { lazy, Suspense } from "react";

import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
const Landing = lazy(()=>import("./components/Landing"));
const Dashboard = lazy(()=>import("./components/Dashboard"));
function App() {

  return (
    <div>
      {/* <div style={{ background: "black", color: "white" }}>
        This is a top bar
      </div>
      <div>
        <button
          onClick={() => {
            navigate = "/dashboard";
          }}
        >
          Dashboard Page
        </button> */}
      {/* this onclick routing is not good way to routing , this gets refetch by browser,,we will use useNavigate */}
      {/* <button onClick={()=>{
        window.location.href="/"
      }}>Landing Page</button>      </div> */}
      {/* we will check how to use useNavigate */}
      {/* u can not use useNavigate out of the BrowserRouter. */}
      {/* <button
          onClick={() => {
            navigate = "/";
          }}
        >
          Landing Page
        </button>{" "}
      </div> */}
      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route path="/dashboard" element={<Suspense fallback={"loading..."}>{<Dashboard />}</Suspense>} />
          <Route path="/" element={<Suspense fallback={"loading..."}>{<Landing />}</Suspense>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
function Appbar() {
  const navigate = useNavigate();

  return (
    <div>
      <div style={{ background: "black", color: "white" }}>
        This is a top bar
      </div>
      <div>
        <button
          onClick={() => {
            navigate("/dashboard");
          }}>
          Dashboard Page
        </button>
        
        <button
          onClick={() => {
            navigate("/");
          }}>
        
          Landing Page
        </button>
      </div>
    </div>
  );
}
export default App;
