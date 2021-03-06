import React, { Component } from 'react';
import { Link} from 'react-router-dom'
import "normalize.css/normalize.css"
import "../styles/App.css"
import axios from 'axios'





class Albums extends Component {
    state = {
        albums: [],
        images: []
    }

    componentDidMount(){
        const id = this.props.match.params.id
        axios.get('http://localhost:3001/albums/').then(resp =>{
            this.setState({
                albums: resp.data
                
               
            })
        })
        axios.get(`http://localhost:3001/albums/${id}?_embed=images`).then(resp =>{
            
            this.setState({
                images: resp.data.images
            })
        })
    }

    componentWillReceiveProps(newProps){
        const id = newProps.match.params.id
        
        axios.get(`http://localhost:3001/albums/${id}?_embed=images`).then(resp =>{
            console.log(resp)
            this.setState({
                images: resp.data.images
            })
        })
    }

  render() {
    return (
      <div>
        <div className="main">
            <Link to={'/'}><h2>Back to Home page</h2></Link> 
            <div className="container">
                
                <div>
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
                <div className="move">
                    <ul className="picList">
                        {this.state.images.filter(dic => dic.albumId == dic.albumId).map(Pic => (
                            <li className="folders" key={"Pic" + Pic.id}>
                                <Link to={"/Pic/" + Pic.id}>
                                    <h3 className="albumHead">{Pic.picName}</h3>
                                    <img className="coverPic" src={Pic.picUrl}/>
                                </Link>
                            </li>
                            
                        ))}
                    </ul>
                </div>
            </div>
        </div>
      </div>
    );
  }
}
export default Albums;
