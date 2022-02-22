import React from 'react';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import About from './components/About';
import './App.css';

function App() {
  return (
    <div className="App">
      <Projects/>
       <Navbar/>
       <About/>
    </div>
  );
}

export default App;
