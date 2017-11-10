import React, { Component } from 'react';
import ListItem from './list-item.js'

class ListDate extends Component {
  foreach(this.props.data.start){
    if(row.date == "05:00"){
      render(){
        return (
          <div>
            <ListItem
              date={row.date}
              start={row.start}
              end={row.end}
              id={row.id}
            />
          </div>
        )
      }
    }
  }
}

export default ListDate;
