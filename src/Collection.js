import React, { Component } from 'react';
import Shield from './Shield.js';
import fire from './fire';

export default class Collection extends Component {
  constructor(props) {
    super(props);
    this.state = {shields: []};
  }

  componentWillMount(){
    /* Create reference to shields in Firebase Database */
    let shieldList = fire.database().ref('/shields').orderByKey().limitToLast(100);
    shieldList.on('child_added', snapshot => {
      /* Update React state when message is added at Firebase Database */
      let newShield = { value: snapshot.val(), id: snapshot.key };
      this.setState({ shields: [newShield].concat(this.state.shields) });
    })
  }

  render() {
    return (
      <div>
      { /* Render the list of shields */
        this.state.shields.map( (shield, idx) =>
          <div key={idx} >
              <Shield
                shieldColor={shield.value.shieldColor}
                frame={shield.value.frame}
                frameColor={shield.value.frameColor}
                dispo={shield.value.dispo}
                first={shield.value.first}
                firstColor={shield.value.firstColor}
                second={shield.value.second}
                secondColor={shield.value.secondColor}
                third={shield.value.third}
                thirdColor={shield.value.thirdColor}
              />
          </div>
                              )
      }
    </div>
    );
  }
}
