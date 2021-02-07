import React from 'react';
import './Splash.css';
import alien from '../images/img-2.svg';

const Splash = (props) => {
    return (
      <>
        <div className="hero">
        <div className="hero__container">
          <div className="hero__container--left">
            <h1>They are coming</h1>
            <h2>Be Prepared</h2>
            <p>Sign up now to join the list.</p>
            <button className="hero__container--btn"><a href="#">Sign Up</a></button>
          </div>
          <div className="hero__container--right">
            <img 
              src={alien}
              alt="alien"
              className="hero__container--img"
            />
          </div>
        </div>
      </div>
      </>
    );
}

export default Splash;
