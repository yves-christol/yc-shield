import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import fire from '../fire';

import YcHeader from './YcHeader.js';
import Home from './Home.js';
import Auth from '../auth/Auth.js';
import PrivateRoute from '../auth/PrivateRoute.js';
import Collection from './Collection.js';
import ShieldBuilder from './ShieldBuilder.js';

// App component - represents the whole app
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true, authenticated: false, currentUser: null };
    this.saveShield = this.saveShield.bind(this);
  }

  componentWillMount() {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          authenticated: true,
          currentUser: user,
          loading: false
        });
      } else {
        this.setState({
          authenticated: false,
          currentUser: null,
          loading: false
        });
      }
    });
  }

  saveShield(shield) {
    const user = this.state.currentUser;
    if (user) {
      shield.email = user.email;
      shield.uid = user.uid;
      fire.database().ref('/shields').push( shield);
    }
  }

  render() {
    if (this.loading) {
      return <p>Loading...</p>;
    }
    return (
      <Router >
        <div className="container">
          <YcHeader authenticated={this.state.authenticated}/>
          <Route
            exact path='/'
            component={(props) => <Home user={this.state.currentUser}/>}
          />
          <Route
            exact path='/login'
            component={Auth}
          />
          <PrivateRoute
            exact path='/build'
            authenticated={this.state.authenticated}
            component={(props) => <ShieldBuilder save={this.saveShield} {...props}/>}
          />
          <Collection />
        </div>
      </Router>
    );
  }
}
