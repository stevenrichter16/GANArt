import React from 'react';
import './App.css';
import Footer from './components/Footer'
import Header from './components/Header'
import './bootstrap.min.css'

/* * * * * * * * * * * * * * * * * * * * * * * * *  
* <App>:   - gets loaded from index.js
*
* @args:   none
*
* @return: 1) <Header>, which contains the navbar
*             that holds the routes and respective 
*             components for navagation
*
*          2) <Footer>, which contains my contact
*             information
* * * * * * * * * * * * * * * * * * * * * * * * */
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
