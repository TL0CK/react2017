import React, { Component } from 'react';
import moment from 'moment'

class Search extends Component {

  constructor(props){
    super(props)
    this.state = {
      data: [],
      start: "",
      end: ""
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

  handleChange = (e) => {
    var newSearchDate = moment(e.target.value, "YYYY-MM-DD").format("DD/MM/YY");
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
    this.filterByDate();
  }

  checkEnd(date) {
      return date <= this.state.end;
  }

  checkStart(date) {
      return date >= this.state.start;
  }

  filterByDate() {
    this.setState(
      {data: this.state.data.filter(this.checkStart(this.state.start))}
    )
    this.setState(
      {data: this.state.data.filter(this.checkEnd(this.state.end))}
    )
  }

  render() {
    const today = moment().format("YYYY-MM-DD");
    var random = Math.floor((Math.random() * 365) + 1);
    const randomDate = moment().add(random, 'day').format("YYYY-MM-DD");
    return (
      <div>
        <label>From : </label>
        <input type="date" defaultValue={today} name="start" onChange={this.handleChange}/>
        <label>To : </label>
        <input type="date" defaultValue={randomDate} name="end" onChange={this.handleChange}/>
      </div>
    )
  }
}

 export default Search;
