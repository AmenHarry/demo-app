
import './App.css';
import Header from './components/Header'
import Hero from './components/Hero';
import About from './components/About';
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

function App() {
  const [nav, setNav] = useState(false);

  const buttonHandler = () => {
    setNav(!nav)
    console.log('my name is AMEN')
  }

  return (
    <div className="App">
      <Header nav={nav} buttonHandler={buttonHandler} />
      <Hero />
      <About />

    </div>
  );
}

export default App;
