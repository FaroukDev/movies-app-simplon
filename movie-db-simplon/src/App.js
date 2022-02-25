import React from "react";
import { Routes, Route } from "react-router-dom";
import  Home  from "./components/Home";


export function App() {
  return (
    <main>
      <Routes>
        <Route path="/"  element={<Home />} exact /> 
      </Routes>
    </main>
  );
  }

export default App;