import React from 'react';
import './App.css';
import Sizes from './components/Sizes';
import Bio from './components/Bio';

function App() {

  const sizes = [
    {name: "8 oz", price: "$10"},
    {name: "16 oz", price: "$18"},
    {name: "30 oz", price: "$30"},
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{float: "left"}}>My Story</h1>
        <Bio/>
        <h1 style={{paddingTop: "50px"}}>Sizes</h1>
          <div> 
            <Sizes name={sizes[0].name} price={sizes[0].price}/>
            <Sizes name={sizes[1].name} price={sizes[1].price}/>
            <Sizes name={sizes[2].name} price={sizes[2].price}/>
          </div>
      </header>
    </div>
  );
}

export default App;
