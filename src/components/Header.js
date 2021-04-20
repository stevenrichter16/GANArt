import React from 'react'
import Impressionist from './Impressionist';
import Fractal from './Fractal';
import Welcome from './Welcome';
import Surreal from './Surreal'
import Request from './Request'

import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

function Header() {

return (
    <Router>
        <div className="container"> 
            <nav className="navbar navbar-expand-lg navbar-dark">
            <ul className="headerLinks">
                <li className="navbar-brand">
                    <span id="title">GAN Art</span>
                </li>
                <li className="navbar-brand">
                <Link to="/welcome">About</Link>
                </li>
                <li className="navbar-brand">
                    <Link to="impressionist">Impressionist</Link>
                </li>
                <li className="navbar-brand">
                    <Link to="fractal">Fractals</Link>
                </li>
                <li className="navbar-brand">
                    <Link to="surreal">Surreal</Link>
                </li>
            </ul>
            </nav>
            <hr />
        </div>

            <Route path="/" exact component={ Welcome }></Route>
            <Route path="/welcome" exact component={ Welcome }></Route>
            <Route path="/impressionist" exact component={ Impressionist }></Route>
            <Route path="/fractal" exact component={ Fractal }></Route>
            <Route path="/surreal" exact component={ Surreal }></Route>
    </Router>
    )
}
export default Header