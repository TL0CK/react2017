import React, { Component } from 'react';
import moment from 'moment'
import {
  Navbar
} from 'react-materialize'
import {
  Link
} from 'react-router-dom'

import List from './../components/list.js'


class Search extends Component {

  constructor(props){
    super(props)
    this.state = {
      data: [],
      start: "",
      end: "",
      empty: false,
      error: false
    }
  }

  handleChange = (e) => {
    var newSearchDate = moment(e.target.value, "YYYY-MM-DD").format("DD-MM-YY");
    if (e.target.name === "start"){
      this.setState(
        {start: newSearchDate}
      )
    }
    else{
      this.setState(
        {end: newSearchDate}
      )
    }
    if(this.state.start>this.state.end || this.state.start === "" || this.state.end === ""){
      this.setState({
        error: true
      })
    }
    else{
      fetch('http://localhost:1337'+"?from=" + this.state.start + "&to=" + this.state.end)
      .then((res) => {
        console.log('Server response' , res);
        return res.json()
      })
      .then(jsonData =>{
        console.log('Data from API',jsonData);
        if(jsonData.length === 0){
          this.setState({
            empty: true,
          });
        }
        else{
          this.setState({
            data: jsonData,
            error: false,
            empty: false
          })
        }
      })
      .catch(err => {
        this.setState({
          error: true,
        });
        this.throwError(err);
      });
    }
  }

  render() {
    return (
      <div>
        <Navbar brand='React' right>
          <Link to="/">Home</Link>
        </Navbar>
        <div class="page">
          <h2>Search</h2>
          <div id="searchDate">
            <label class="search">From : </label>
            <input class="search" type="date" defaultValue={"jj/mm/aaaa"} name="start" onChange={this.handleChange}/>
            <label class="search">To : </label>
            <input class="search" type="date" defaultValue={"jj/mm/aaaa"} name="end" onChange={this.handleChange}/>
            {this.state.error === true || this.state.empty === true ?
              <div class="invalidDate">Date invalide</div> :
              <List data={this.state.data}/>
            }
          </div>
        </div>
      </div>
    )
  }
}

 export default Search;
