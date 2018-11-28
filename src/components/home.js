import React, { Component } from 'react'
import LoginForm from './components/login';
class Home extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className="home-box">
                <LoginForm />
                {/* <Charts /> */}
            </div>
        )

    }
}

export default Home;
