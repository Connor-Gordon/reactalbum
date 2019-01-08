import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import "normalize.css/normalize.css"
import "../styles/App.css"

import Home from './Home'
import Albums from './Albums'
import Pics from './Pics'



class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/"  component={ Home } />
          <Route path="/Album/:id"  component={ Albums }/>
          <Route path="/Pic/:id"  component={ Pics }/>
        </div>
      </Router>
    );
  }
}

export default App;
