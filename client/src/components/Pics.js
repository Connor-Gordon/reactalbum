import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Link} from 'react-router-dom'
import "normalize.css/normalize.css"
import "../styles/App.css"
import axios from 'axios'




class Pics extends Component {
    state = {
        images: []
    }

    componentDidMount(){
        const id = this.props.match.params.id
        axios.get(`http://localhost:3001/images/${id}`).then(resp =>{
            console.log(resp)
            this.setState({
                images: resp.data
            })
        })
    }
    componentWillReceiveProps(newProps){
        const id = newProps.match.params.id
        axios.get(`http://localhost:3001/images/${id}`).then(resp =>{
            console.log(resp)
            this.setState({
                images: resp.data
            })
        })
    }
  render() {
    let id = Number(this.props.match.params.id)
    return (
      <Fragment>
        <div className="main">
          <Link to='/'><p>Back to Albums</p></Link>
            <h1>{this.state.images.picName}</h1>
            <div className="picContainer">
                <Link to={"/Pic/" + (id-1)}><button className="buttons" onClick={this.handleClick}>Back</button></Link>
                <div id="picTrap">
                    <img className="singlePic" src={this.state.images.picUrl}/>
                </div>
                <Link to={"/Pic/" + (id+1)}><button className="buttons" onClick={this.handleClick}>Forward</button></Link>
            </div>
        </div>
      </Fragment>
    );
  }
}

export default Pics;
