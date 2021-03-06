import React, { Component } from 'react';
import { MenuItems } from "./MenuItems";
import './Navbar.css';
import {Link} from 'react-router-dom';

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
                        <Link to={`/${item.title}`}>{item.title}</Link>               
                    )
                })}
                </ul>
            </nav>
        )
    }
}

export default Navbar;