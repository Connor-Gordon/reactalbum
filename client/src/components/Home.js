import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import "normalize.css/normalize.css"
import "../styles/App.css"
import axios from 'axios'

import App from './App'
import Albums from './Albums'




class Home extends Component {
    state = {
        albums: []
    }


componentDidMount(){
    axios.get('http://localhost:3001/albums').then(resp =>{
        console.log(resp)
        this.setState({
            albums: resp.data
        })
    })
}

  render() {
    return (
      <Router>
        <div>
            <h1>My Albums</h1>
            <div className="container">
                <ul className="home">
                {this.state.albums.map(Album => (
                    <li className="folders" key={"Album" + Album.id}>
                        <Link to={"/Album/" + Album.id}>
                            <div>
                                <h3>{Album.name}</h3>
                                <p><img className="coverPic" src={Album.coverPic}/></p>
                            </div>
                        </Link>
                    </li>
                    
                ))}
                </ul>
            </div>
        </div>
      </Router>
    );
  }
}

export default Home;
