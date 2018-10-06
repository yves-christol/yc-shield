import React, { Component } from 'react';
import Shield from './Shield.js';
import fire from '../fire';

export default class Collection extends Component {
  constructor(props) {
    super(props);
    this.state = {shields: []};
  }

  componentWillMount(){
    /* Create reference to shields in Firebase Database */
    let dbname = fire.ycname;
    let shieldList = fire.database().ref(dbname).orderByKey().limitToLast(100);
    shieldList.on('child_added', snapshot => {
      /* Update React state when message is added at Firebase Database */
      let newShield = { value: snapshot.val(), id: snapshot.key };
      this.setState({ shields: [newShield].concat(this.state.shields) });
    })
  }

  //this function will separate each six shields to display
  splitRows() {
    let rows = [];
    const shields = this.state.shields;

    for(var i = 0; i < shields.length; i+=6) {
         let oneRow = [];
         oneRow.push(shields.slice(i, i+6).map( (shield, idx) => {
           return   (
             <div className="two columns" key={i + idx} >
               <Shield
                 shieldColor={shield.value.shieldColor}
                 partition={shield.value.partition}
                 partitionColor={shield.value.partitionColor}
                 piece={shield.value.piece}
                 pieceColor={shield.value.pieceColor}
                 meubles={shield.value.meubles}
               />
             </div> )
         }));
         rows.push(oneRow.map(itm => {
           return <div className="row" key={'r'+i}>{itm}</div>
         }))
    }
    return rows;
  }

  render() {
    return (<span>
              <div className="row">
                <div className="twelve columns">
                  <h5> These are the last creations posted in the database</h5>
                </div>
              </div>
              {this.splitRows()}
            </span>);
  }
}
