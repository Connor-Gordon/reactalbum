import React, { Component, Fragment } from 'react';
import "normalize.css/normalize.css"
import "../styles/App.css"
import axios from 'axios'




class Pics extends Component {
    state = {
        images: []
    }

    componentDidMount(){
        
        axios.get('http://localhost:3001/images/:id').then(resp =>{
            this.setState({
                images: resp.data
            })
        })
    }
  render() {
    return (
      <Fragment>
          <div>
            <h1>Pic Name</h1>
           <img src={this.state.images.picUrl} alt="imttt"/>
          </div>
      </Fragment>
    );
  }
}

export default Pics;
