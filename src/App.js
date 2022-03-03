import React from 'react';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import About from './components/About';
import Home from './components/Home';
import './App.css';
import Skills from './components/Skills';
import Tools from './components/Tools';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Projects/> 
      <Skills/>
      <Tools/>
    </div>
  );
}

export default App;


