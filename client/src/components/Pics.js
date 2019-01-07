import React, { Component, Fragment, Link } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import "normalize.css/normalize.css"
import "../styles/App.css"
import axios from 'axios'

import App from './App'
import Home from './Home'
import Albums from './Albums'




class Pics extends Component {
    state = {
        images: []
    }

    componentDidMount(){
        
        axios.get('http://localhost:3001/images').then(resp2 =>{
            this.setState({
                images: resp2.data
            })
        })
    }
  render() {
    return (
      <Fragment>
          <div>
            <h1>Pic Name</h1>
            <div>picture here</div>
          </div>
      </Fragment>
    );
  }
}

export default Pics;
