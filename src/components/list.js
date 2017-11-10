import React, { Component } from 'react';
import ListItem from './list-item.js'

class List extends Component {
  render() {
    return (
      <div>
        {this.props.data.map(row =>
          <ListItem
            date={row.date}
            start={row.start}
            end={row.end}
            key={row.key}
            id={row.id}
          />)
        }
      </div>
    );
  }
}

export default List;
