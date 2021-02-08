import React, { Component } from 'react';
import './Plans.css';

class Plans extends Component {
    state = {
        data: "Hello - from the Aliens"
    }

    render() {
        return (
            <div id="quoteContainer">
                <Child dataFromParent= {this.state.data}/>
            </div>
        );
    }
}

class Child extends Component {
    render() (
        return(
            <div>
                <h1 id="quote"> {this.props.dataFromParent} </h1>
            </div>
        )
    )
}

export default Plans;