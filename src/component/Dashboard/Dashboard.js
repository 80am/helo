import React, { Component } from 'react';
import Auth from '../Auth/Auth'
import dashboard from './dashboard.css'

// import routes from './routes.js'
//import {Route} from 'react-router-dom' 

// import Routes from './routes'

class Dashboard extends Component {

  constructor(props) {
    super(props)

    this.state={
      posts:[],
      sesarch:"",
      userposts:true
    }
  }

  dontShow(props) {
    if (props.location === '/Dashboard') {
        console.log("dont show this");
    } else {
        return <div>warning</div>
    }

}

  render() {
    return (
      <section className="bigbox">
          <div className="container">
          <div>
          <p>Dashboard</p>
          </div>
          </div>
      </section>
    );
  }
}

export default Dashboard;