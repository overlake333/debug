import './App.css';
import Navbar from './components/Navbar/Navbar';
import Splash from './components/Splashes/Splash';
import Sightings from './components/Sightings';
import { Component } from 'react';
import Plans from './components/Parents/Plans';
import UFOs from './components/UFOs';

import {
  BrowserRouter as Router,
  Switch,
  Route,
 } from "react-router-dom";

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      currPage: "Home"
    }
  }
  render() {
    return (
      <div className="App">
        <Router>
           <Navbar/>
          <Switch>
            <Route path="/sightings">
              <Sightings />
            </Route>
            <Route path="/plans">
              <Plans />
            </Route>
            <Route path="/ufos">
              <UFOs />
            </Route>
            <Route path="/">
              <Splash />
            </Route>
          </Switch>
       </Router>
      </div>
    );
  }
 
 
  
}

export default App;
