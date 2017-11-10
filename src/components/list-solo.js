import React, { Component } from 'react';
import {Card} from 'react-materialize'

class ListSolo extends Component {
  render() {
    return (
      <div>
        <Card>
          <div>{this.props.data.start}</div>
          <div>{this.props.data.end}</div>
          <div>{this.props.data.date}</div>
          <div>{this.props.data.id}</div>
    	  </Card>
      </div>
    );
  }
}

export default ListSolo;
