import React from 'react';
import logout from '../auth/Logout.js';
import { Link } from 'react-router-dom';

const YcHeader = (props) => (
  <div className="row" >
    <div className="two columns">
      <img src="blason.png" alt="shield"></img>
    </div>
    <div className="four columns">
      <h4>Emblazon yourself</h4>
    </div>
    <div className="two columns">
      <Link to="/" >
        <button className="button" > About </button>
      </Link>
    </div>
    <div className="two columns">
      <Link to="/build">
        { props.authenticated ?
          <button className="button"> Build</button> :
          <button className="button" disabled> Build</button>
        }
      </Link>
    </div>
    <div className="two columns">
      { props.authenticated ?
        <button className="button" onClick={logout}> Logout </button> :
        <Link to="/login">
          <button className="button-primary" > Login </button>
        </Link>
      }
    </div>
  </div>
);

export default YcHeader;
