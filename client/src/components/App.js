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
          <Route exact path="/" exact component={ Home }></Route>
          {/* when JSON is working, add /:id after albums to display album id to url */}
          <Route path="/Album/:id" exact component={ Albums }></Route>
          {/* when JSON is working, add /:id after pics to display pic id to url */}
          <Route path="/Pic/:id" exact component={ Pics }></Route>
        </div>
      </Router>
    );
  }
}

export default App;
