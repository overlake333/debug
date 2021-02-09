import React, { Component } from 'react';
import { MenuItems } from "../../MenuItems";
import './Navbar.css';
import { Button } from '../../Button'
class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => { 
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo"> ALIEN <i className="fas fa-chess"></i></h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item,index) => {
                        return (
                            <li key={index} onClick = {() => {this.props.changeCurrPage(item.title)}}>
                                {item.title}
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}

export default Navbar;