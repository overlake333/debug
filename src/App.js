import './App.css';
import Navbar from './components/Navbar/Navbar';
import Splash from './components/Splashes/Splash';
import Sightings from './components/Sightings';
import { Component } from 'react';
import Plans from './components/Parents/Plans'
import UFOs from './components/UFOs'

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
        <Navbar changeCurrPage = {this.changeCurrPage}/>
        {this.renderPage()}
        <Plans/>
      </div>
    );
  }
  
}

export default App;
