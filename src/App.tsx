import React, { useState } from 'react';
import Polygon from './components/Polygon';
import Controls from './components/Control';
import logo from './logo.svg';
import './App.css';

function App() {
  const [index, setIndex] = useState<number>(0);
  const [sequence, setSequence] = useState<number[]>([]);

  const fibonacci = (n: number): number => {
    if(n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
