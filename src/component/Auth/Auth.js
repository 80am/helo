import React, { Component } from 'react';
import axios from 'axios';


class Auth extends Component {
    constructor(props) {
        super(props)

        this.state = {
            password: "p",
            username: "o"
        }

        this.handlePassword = this.handlePassword.bind(this)
        this.handleUserName = this.handleUserName.bind(this)
    }

    handleRegister() {
        
        axios.post('/api/registering', this.state).then(res => this.setState({password: res.data})
        // ({   
        //     method: "post",
        //     url: '/api/registering',
        //     data: { newUser: this.state }
        // }).then((res) => window.location = `http://localhost:3333/#/dashboard`)
        )
    }

    handlePassword(e) {
        console.log(this.state.password)
        this.setState({
            password: e.target.value
        })
    }

    handleUserName(e) {
        console.log(this.state.username)
        this.setState({
            username: e.target.value
        })
    }

    render() {
        return (
            <section>
                <p>Auth</p>
                <input type="text" onChange={this.handleUserName} placeholder="Username" />
                <input type="text" onChange={this.handlePassword} placeholder="Password" />
                <hr/>
                <button>Login</button>
                <button onClick={this.handleRegister}>Register</button>
            </section>
        );
    }
}

export default Auth;
