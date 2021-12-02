
import './App.css';
import React, { Component, Fragment } from 'react'
import Navbar from './components/navbar.js'
import News from './components/news'
import Login from './components/login'
import Register from './components/register.js';
import {
  BrowserRouter as 
  Router, Route, Switch
} from "react-router-dom";
export default function App() {
  return (
    <div>
      <Router>
          <Navbar />
          <Switch>
            <Route exact path="/entertainment"><News key="entertainment" country="in" category="entertainment" /></Route>
            <Route exact path="/business"><News key="business" country="in" category="business" /></Route>
            <Route exact path="/general"><News key="general" country="in" category="general" /></Route>
            <Route exact path="/health"><News key="health" country="in" category="health" /></Route>
            <Route exact path="/science"><News key="science" country="in" category="science" /></Route>
            <Route exact path="/sports"><News key="sports" country="in" category="sports" /></Route>
            <Route exact path="/technology"><News key="technology" country="in" category="technology" /></Route>
            <Route exact path="/"><Login/></Route>
            <Route exact path="/register"><Register/></Route>
          </Switch>
      </Router>
    </div>
  )
}