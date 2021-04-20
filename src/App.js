import React from 'react';
import './App.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Welcome from './components/Welcome'
import Impressionist from './components/Impressionist';
import Fractal from './components/Fractal'
import Footer from './components/Footer'
import Header from './components/Header'

import './bootstrap.min.css'

function App() {
  return (
    <div className="container">
        <Header />
        <hr></hr>
        <Footer />
    </div>
  )
}

export default App;
