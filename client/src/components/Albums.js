import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import "normalize.css/normalize.css"
import "../styles/App.css"
import axios from 'axios'

import App from './App'
import Home from './Home'




class Albums extends Component {
    state = {
        albums: [],
        images: [],
        album: {}
    }

    componentDidMount(){
        axios.get('http://localhost:3001/albums/').then(resp =>{
            console.log(resp)
            this.setState({
                albums: resp.data
                
               
            })
        })
        axios.get('http://localhost:3001/images/').then(resp =>{
            this.setState({
                images: resp.data
            })
        })
    }


  render() {
    return (
      <Router>
          <div>
            <h1>{this.state.album.name}lhj</h1>
                <Link to={'/'}><h2>Back to Home page</h2></Link> 
            <div className="container">
                
                <div >
                    <ul className="albumList">
                        {this.state.albums.map(Album => (
                        <li key={"Album" + Album.id}>
                            <Link to={"/Album/" + Album.id}>
                                <div className="listDivs">
                                    <p>{"Album" + Album.id}</p>
                                    <p>{Album.name}</p>
                                </div>
                            </Link>
                        </li>
                    ))}
                    </ul>
                </div>
                <div>
                    <ul className="picList">
                        {this.state.images.filter(dic => dic.albumId == 5).map(Pic => (
                            <li className="picDisplay" key={"Pic" + Pic.id}>
                                <Link to={"/Pic/" + Pic.id}>
                                    <p>{Pic.picName}</p>
                                    <img className="image" src={Pic.picUrl}/>
                                </Link>
                            </li>
                            
                        ))}
                    </ul>
                </div>
            </div>
        </div>
      </Router>
    );
  }
}
export default Albums;
