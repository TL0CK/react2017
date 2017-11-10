import React, { Component } from 'react';
import {Navbar,NavItem,ProgressBar} from 'react-materialize'
import {
  Link,
  Redirect
} from 'react-router-dom'

import List from './../components/list.js'
import ListSolo from './../components/list-solo.js'

class SinglePage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      legnth: "0",
      error: false,
    }
  }


  componentDidMount() {
    fetch('http://localhost:1337/'+this.props.match.params.id)
    .then((res) => {
      console.log('Server response' , res)
      return res.json()
    })
    .then(jsonData =>{
      console.log('Data from API',jsonData);
      this.setState({
        data: jsonData
      })
        console.log(this.state.data)
        //les datas sont bien dans le this.state.data mais la page ne marche pas ...
    })
    .catch(err => {
      this.setState({
        error: true,
      });
      const errStatus = err.response ? err.response.status : 500;
      switch(errStatus) {
        case 400:
          alert('400 – Bad Request');
          break;
        case 401:
          alert('401 – Authorization Required');
          break;
        case 403:
          alert('403 – Forbidden');
          break;
        case 404:
          alert('404 – Not Found');
          break;
        case 408:
          alert('408 – Request Time-Out');
          break;
        case 410:
          alert('410 – Gone');
          break;
        case 418:
          alert('418 – I\'m a teapot');
          break;
        case 500:
          alert('500 – Internal Server Error');
          break;
        case 501:
          alert('501 – Not Implemented');
          break;
        case 502:
          alert('502 – Bad Gateway');
          break;
        case 503:
          alert('503 – Service Temporarily Unavailable');
          break;
        case 504:
          alert('504 – Gateway Time-Out');
          break;
        default :
          alert('An error occured');
          break;
      };
    })

    fetch('http://localhost:1337/')
    .then((res) => {
      console.log('Server response' , res)
      return res.json()
    })
    .then(jsonData =>{
      console.log('Data from API',jsonData);
      this.setState({
        length: jsonData.length
      })
    })
  }

  componentWillReceiveProps(nextProps){
    fetch('http://localhost:1337/'+nextProps.match.params.id)
    .then((res) => {
      console.log('Server response' , res);
      return res.json()
    })
    .then(jsonData =>{
      console.log('Data from API',jsonData);
      this.setState({
        data: jsonData,
      }
    )
    })
    .catch(err => {
      this.setState({
        error: true,
      });
      const errStatus = err.response ? err.response.status : 500;
      switch(errStatus) {
        case 400:
          alert('400 – Bad Request');
          break;
        case 401:
          alert('401 – Authorization Required');
          break;
        case 403:
          alert('403 – Forbidden');
          break;
        case 404:
          alert('404 – Not Found');
          break;
        case 408:
          alert('408 – Request Time-Out');
          break;
        case 410:
          alert('410 – Gone');
          break;
        case 418:
          alert('418 – I\'m a teapot');
          break;
        case 500:
          alert('500 – Internal Server Error');
          break;
        case 501:
          alert('501 – Not Implemented');
          break;
        case 502:
          alert('502 – Bad Gateway');
          break;
        case 503:
          alert('503 – Service Temporarily Unavailable');
          break;
        case 504:
          alert('504 – Gateway Time-Out');
          break;
        default :
          alert('An error occured');
          break;
      };
    })
  }

  render() {
    const {match} = this.props;
    let id = match.params.id;
    id = parseInt(id,10);
    let nextId = id + 1;
    let previousId = id - 1;

    if (isNaN(id) || id <= 0 || id > this.state.length){
      if (match.params.id == "search"){
        return(
          //je sais c'est moche mais je ne vois pas comment régler le problème autrement ...
          <div>
          </div>
        )
      }
      else{
        return(
          <div>
            Impossible to get there ... go back to <Link to="/">Home</Link>.
          </div>
        )
      }
    }
    else{
      return (
        <div>
          <Link to="/">Home</Link>
          <br/>
          <Link to={`/${previousId}`}>Previous</Link>
          <br/>
          <Link to={`/${nextId}`}>Next</Link>
          {!this.state.data ?
            <ProgressBar /> :
            <ListSolo data={this.state.data}/>
          }
        </div>
      );
    }
  }
}

export default SinglePage;
