import React, { Component } from 'react';
import {
  ProgressBar,
  Navbar
} from 'react-materialize'
import {
  Link,
} from 'react-router-dom'

import './../styles/App.css';
import List from './../components/list.js'


class HomePage extends Component {

  constructor(props){
    super(props)
    this.state = {
      data: [],
      length: "0"
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
        length: jsonData.length
      })
    })
  }

  render() {
    return (
      <div>
        <Navbar brand='React' right>
        	<Link to="/search">Search</Link>
        </Navbar>

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
