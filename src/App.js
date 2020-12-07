import React from "react";
import MultiCounter from "./components/MultiCounter";
import './App.css';

function App() {
  const size = 100;
  return (
    <div className="App">
      <header className="App-header">
        <MultiCounter />
      </header>
    </div>
  );
}

export default App;
