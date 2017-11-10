import React, { Component } from 'react';
import './../styles/App.css';
import {
  Link,
} from 'react-router-dom'

class NotFound extends Component {
  render() {
    return (
        <div>
            <h1>404 NOT FOUND</h1>
            <Link to="/">Home</Link>
        </div>
    )
  }
}

export default NotFound;
