import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import LoginForm from './components/login';
import Main from './components/main'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      clients: []
    }
  }
  componentDidMount() {
    this.getData();
  }
  
  getData() {
    axios.get('http://localhost:5000/getData')
    .then(result => {
      console.log(result.data);
      this.setState({ clients: result.data })
    })
  }
  render() {
    return (
      <Router>
      <div className="App">
        <div className="title t-font"></div>
        {/* <Navbar logout={this.props.store.logout} />   */}
        {/* <Route exact path="/" component={Home} /> */}
        <Route path="/login" render={() => <LoginForm />}/>
        <Route path="/main" render={() => <Main logout={this.props.store.logout} loggedIn={this.props.store.loggedIn} id={this.props.store.id}/>}/> 
      </div>
      </Router>
    );
  }
}

export default App;
