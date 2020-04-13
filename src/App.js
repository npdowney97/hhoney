import React from 'react';
import './App.css';
import Sizes from './components/Sizes/Sizes';
import Bio from './components/Bio/Bio';
import AppBar from './components/AppBar/AppBar';

function App() {

  const sizes = [
    {name: "8 oz", price: "$10"},
    {name: "16 oz", price: "$18"},
    {name: "30 oz", price: "$30"},
  ];

  return (
    <div className="App">
      <header className="App-header">
        <AppBar/>
        <h2 style={{float: "left"}}>My Story</h2>
        <Bio/>
        <h2 style={{paddingTop: "20px"}}>Jar Sizes</h2>
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
