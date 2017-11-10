import React, { Component } from 'react';
import {Card} from 'react-materialize'
import {
  Link,
} from 'react-router-dom'

class ListItem extends Component {
  render() {
    const{date} = this.props
    return (
      <div>
        <Card title={date}>
          <div>{this.props.start}</div>
          <div>{this.props.end}</div>
          <Link to={`/${this.props.id}`}>Détails</Link>
    	  </Card>
      </div>
    );
  }
}

export default ListItem;
