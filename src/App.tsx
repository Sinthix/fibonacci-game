import React, { useState } from 'react';
import Polygon from './components/Polygon';
import Controls from './components/Control';
import logo from './logo.svg';
import Modal from './components/Modal';
import './App.css';

function App() {
  const [index, setIndex] = useState<number>(0);
  const [sequence, setSequence] = useState<number[]>([]);
  const [showModal, setShowModal] = useState(false);

  const fibonacci = (n: number): number => {
    if(n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
  }

  const handleAdd = () => {
    if(index < 10) {
      const nextFibonacciVal = fibonacci(index);
      if(nextFibonacciVal !== 0) {
        const newSequence = [...sequence, fibonacci(index)];
        setSequence(newSequence);
        
      }
    if(index >= 9) {
      toggleModal();
    }
      setIndex(index + 1);
    }
  };

  const handleRemove = () => {
    if(index > 0) {
      setSequence(sequence.slice(0, -1));
      setIndex(index - 1);
    }
  };

  const handleReset = () => {
      setSequence([]);
      setIndex(0);
  };

  const getPolygonType = (n: number): 'circle' | 'square' | 'triangle' => {
    if(n % 3 === 0) return 'circle';
    if(n % 3 === 1) return 'square';
    return 'triangle'
  };

  const toggleModal = () => {
    setShowModal(!showModal);
    if(showModal){
      handleReset();
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Fibonacci Sequence</p>
      </header>
      
      <div className='container'>
      <div className='counter-controls'>
        <span>Current Index <b>{index}</b></span>
        <Controls onAdd={handleAdd} onRemove={handleRemove} onRestart={handleReset} />
      </div>
        {sequence.map((num, index) => (
          <div className='line' key={index}>
            <div>{num}</div>
            <div className='polys'>
              {[...Array(num)].map((_, polyIdx) => (
                <Polygon key={polyIdx} type={getPolygonType(index +1)} />
              ))}
            </div>
          </div>
          ))}
       
      </div>
      <Modal show={showModal} onClose={toggleModal}>
        <h2>Current index is {index}</h2>
        <p>The game will restart</p>
        <button className='close-modal' onClick={toggleModal}>Ok</button>
      </Modal>
    </div>
  );
}

export default App;
