import React from 'react';
import logo from './logo.svg';
import './App.css';
import  {useState} from 'react';
import { useEffect } from 'react';

function App() {
  

  
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 0);
    });
  }, []);
  
  return (
    <div className="App">
      <header className={scroll ? "App-header" : "App-header act"}>
        <h1>ATM</h1>
        <ul>
          <li>TOP</li>
          <li>ABOUT</li>
          <li>MEMBERS</li>
          <li>GALLERY</li>
          
        </ul>
      </header>     
    </div>
  );
}

export default App;

