import React, { Component } from 'react';
import {ProgressBar} from 'react-materialize'
import {
  Link,
} from 'react-router-dom'

import './../styles/App.css';
import List from './../components/list.js'


class HomePage extends Component {

  constructor(props){
    super(props)
    this.state = {
      data: []
    }
  }

  componentDidMount(){
    fetch('http://localhost:1337')
    .then((res) => {
      console.log('Server response' , res);
      return res.json()
    })
    .then(jsonData =>{
      console.log('Data from API',jsonData);
      this.setState({
        data: jsonData,
      })
    })
  }

  render() {
    return (
      <div>
        <Link to="/search">Search</Link>
        <h2>Prochaines Fermetures</h2>
        {!this.state.data.length ?
          <ProgressBar /> :
          <List data={this.state.data}/>
        }
      </div>
    );
  }
}

export default HomePage;
