import React, { Component } from 'react';
import "./Counter.css";

class Counter extends Component {
  constructor(props){
    super(props);
    this.state = {count: 0};
  }

  update = (num) => {
    this.setState({count: num})
  }

  render() {
    console.log("gothere");
    return (
      <div>
        <div className='counter'>Number of ALIEN sightings: {this.state.count}</div>
        <PlusButton count={this.state.count} update={this.update}/>
        <MinusButton count={this.state.count} update={this.update}/>
      </div>
    );
  }
}

// const MinusButton = ({count, update}) => {
//     return(
//       <button className='btn--primary' id="count" onClick={() => update(count - 1)}>-</button>
//     )
//   }
  
// const PlusButton = ({count, update}) => {
//     return(
//         <button className='btn--primary' id="count" onClick={() => update(count + 1)}>+</button>
//     )
// };

export default Counter;