import React from 'react';

import Picker from './Picker.js';
import Shield from './Shield.js';
import { getPartitions } from './shield/partitions.js';

const Partition =(props) => (
  <span
    onClick={() => props.onClick(props.partition)}
    className={props.selected ? 'shieldSelected' : 'shield'}
    >
      <Shield
        shieldColor='argent'
        partition={props.partition}
        piece='none'
        partitionColor='sable'
      />
  </span>
);

export default class PartitionPicker extends Picker {

  renderOne(part) {
    return (
      <Partition
        key={part}
        partition={part}
        onClick={this.pick}
        selected={this.state.expanded && part === this.props.selected}
      />
    );
  }

  renderList() {
    return (
      <span>
        {getPartitions().map((partition, idx) => (this.renderOne(partition[0])))}
      </span>
    );
  }
}
