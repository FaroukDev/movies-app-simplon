import React from "react";
import { Routes, Route } from "react-router-dom";
import  Home  from "./components/Home/Home";
import MovieDetail  from "./components/MovieDetail/MovieDetail";


export function App() {
  return (
    <main>
      <Routes>
        <Route path="/"  element={<Home />} exact />
        <Route path="/movie:id" element={<MovieDetail/>}/>
      </Routes>
    </main>
  );
}

export default App;