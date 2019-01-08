import React, { Component } from 'react';
import { BrowserRouter as Router, Link} from 'react-router-dom'
import "normalize.css/normalize.css"
import "../styles/App.css"
import axios from 'axios'



class Home extends Component {
    state = {
        albums: []
    }


componentDidMount(){
    axios.get('http://localhost:3001/albums').then(resp =>{
        this.setState({
            albums: resp.data
        })
    })
}

  render() {
    return (
      <Router>
        <div className="main">
            <h1>My Albums</h1>
            <div className="container">
                <ul className="home">
                {this.state.albums.map(Album => (
                    <li className="folders" key={"Album" + Album.id}>
                        <Link to={"/Album/" + Album.id}>
                            <div>
                                <h3 className="albumHead">{Album.name}</h3>
                                <p><img className="coverPic" src={Album.coverPic} alt="imw2"/></p>
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
