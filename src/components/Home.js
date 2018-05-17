import React from 'react';

const Home = (props) => (
  <span>
    <div className="row">
      <div className="twelve columns">
        <h5>Welcome {props.user ?
          props.user.email.substring(0, props.user.email.lastIndexOf("@")) :
          'visitor'}
        </h5>
      </div>
    </div>
    <div className="row">
      <div className="six columns">
        <p> This is a small playground to test and learn with SVG, React and
          Firebase alltogether. You can play around and get the code on
          <a href="https://github.com/yves-christol/yc-shield"> GitHub </a>.
        </p>
      </div>
      <div className="six columns">
        <p> If you want to create and store your own blason, you must
           log in first.
        </p>
      </div>
    </div>
  </span>
);

export default Home;
