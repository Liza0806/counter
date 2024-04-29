import "./App.css";

import { CounterStartVersion } from "./counterStartVersion/CounterStartVersion";
import { CounterWithRedux } from "./counterWithRedux/CounterWithRedux";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./counterStartVersion/components/Layout";

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
