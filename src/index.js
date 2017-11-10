import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import HomePage from './pages/HomePage';
import SinglePage from './pages/SinglePage';
import Search from './pages/search';
import NotFound from './pages/404';

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

class App extends React.Component {

  render() {
    return (
      <Router>
        <div>
          <Route path="/" exact component ={HomePage} />
          <Route path="/search" exact component ={Search} />
          <Route path="/:id" component ={SinglePage} />
          <Route path="/404nf" component={NotFound}/>
        </div>
      </Router>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
