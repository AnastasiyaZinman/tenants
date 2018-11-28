import React, { Component } from 'react';
import axios from 'axios'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './home.css';
class Main extends Component {
    constructor() {
        super()
        this.state = {
           
        }
    }

render() {
  return (
    
    <div>
       {(this.props.store.loggedIn) ?  (
      <div><div className="App">
        {this.props.store.showNavBar()}
        <div className="container">
         kkk
        </div>
      </div>
      {/* <div className="dot"> <FontAwesomeIcon size='6x' onClick={() => this.showAddForm()} icon="plus" /></div> */}
    </div>)
    :null}
    </div>
  )
}
}

export default Main;
