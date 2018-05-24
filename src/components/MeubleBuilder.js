import React, { Component } from 'react';

import ColorPicker from './ColorPicker.js';
import MeublePicker from './MeublePicker.js';
import DispoPicker from './DispoPicker.js';
import Shield from './Shield.js';
import {getLeftDispos} from './shield/dispos.js';

const DelMeuble = (props) => (
  <span
    onClick={() => props.onClick(props.idx)}
    className={props.selected ? 'shieldSelected' : 'shield'}
    >
      <Shield
        shieldColor='gules'
        frame='none'
        frameColor='sable'
        meubles={[{name: 'delete', color: 'argent', dispo: 'r1'}]}
      />
  </span>
);

const AddMeuble = (props) => (
  <span
    onClick={() => props.onClick(props.left)}
    className={props.selected ? 'shieldSelected' : 'shield'}
    >
      <Shield
        shieldColor='sinople'
        frame='none'
        frameColor='sable'
        meubles={[{name: 'cross', color: 'argent', dispo: 'r1'}]}
      />
  </span>
);

// App component - represents the whole app
export default class MeubleBuilder extends Component {
  constructor(props) {
    super(props);
    this.pick = this.pick.bind(this);
    this.add = this.add.bind(this);
    this.del = this.del.bind(this);
  }

  pick(attribute, value) {
    const meubles = this.props.meubles.slice();
    const ar = attribute.split('-');
    const att = ar[0];
    const idx = ~~ar[1];
    meubles[idx][att] = value;
    this.props.action('meubles', meubles);
  }

  add(left) {
    const meubles = this.props.meubles;
    if (left.length > 0) {
      const m = {name: 'rond', color: 'sable', dispo: left[0]};
      meubles.push(m);
      this.props.action('meubles', meubles);
    }
  }

  del(idx) {
    let meubles = this.props.meubles;
    meubles.splice(idx, 1);
    this.props.action('meubles', meubles);
  }

  render() {
    //this.props.meubles.map( (m, i) => console.log(`${i+1} - ${m.name}, ${m.color}, ${m.dispo} `));
    const dispos = this.props.meubles.map((m) => m.dispo);
    const left = getLeftDispos(dispos);
    return (
      <div className="four columns">
        <p> Meubles </p>
        {this.props.meubles.map( (m, idx) =>
          <div key={m.dispo+'B'}>
            <MeublePicker
              key={m.dispo+'M'}
              selected={m.name}
              action={this.pick}
              attribute={'name-'+idx}
            />
            <DispoPicker
              key={m.dispo+'D'}
              selected={m.dispo}
              dispos={dispos}
              action={this.pick}
              attribute={'dispo-'+idx}
            />
            <ColorPicker
              key={m.dispo+'C'}
              selected={m.color}
              action={this.pick}
              attribute={'color-'+idx}
            />
            <DelMeuble
              key={m.dispo}
              onClick={this.del}
              idx={idx}
            />
          </div>
        )}
        {left.length > 0 ?
          <AddMeuble
            dispos={dispos}
            left={left}
            onClick={this.add}
          /> :
          ''
        }
      </div>
    );
  }
}
