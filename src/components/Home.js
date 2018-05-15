import React from 'react';

const Home = (props) => (
  <div className="row">
    <div className="three columns">
      <h5>Welcome {props.user ? props.user.email : 'visitor'} </h5>
    </div>
    <div className="six columns">
      <p> This is a small playground to test and learn with SVG, React and
        Firebase alltogether. You can play around and get the code on
        <a href="https://github.com/yves-christol/yc-shield"> GitHub </a>
      </p>
    </div>
    <div className="three columns">
      <p> if you want to create and store your own blason, you must
         log in first.
      </p>
    </div>
  </div>
);

export default Home;
