import React, { useEffect, useState } from "react";

import "./App.css";

import { CounterStartVersion } from "./CounterStartVersion";
import { CounterWithRedux } from "./CounterWithRedux";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./layout";

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/CounterStartVersion" element={<CounterStartVersion />}/>
        <Route path="/CounterWithRedux" element={<CounterWithRedux />}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
