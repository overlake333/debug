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

  changeCurrPage = (newCurrPage) => {
    console.log(newCurrPage)
    this.setState({
      currPage: newCurrPage,
    })
  }

  renderPage = () => {
    if(this.state.currPage === "UFOs"){
      return <UFOs/>
    } else if(this.state.currPage === "Sightings") {
      return <Sightings/>
    } else{
      return <Splash/>
    }
  }

  render() {
    return (
      <div className="App">
        <Router>
           <Navbar changeCurrPage = {this.changeCurrPage}/>
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
