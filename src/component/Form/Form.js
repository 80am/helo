import React, { Component } from 'react';

// import routes from './routes.js'
//import {Route} from 'react-router-dom' 

// import Routes from './routes'

class Form extends Component {

    constructor(props) {
        super(props)

        this.state ={
            title:'',
            img:'',
            content:''
        }

        this.handlechange1 = this.handlechange1.bind(this)
        this.handlechange2 = this.handlechange2.bind(this)
        this.handlechange3 = this.handlechange3.bind(this)
    }

    handlechange1(){}

    handlechange2(){}

    handlechange3(){}


  render() {
    return (
      <section>
          <p>Form</p>
      </section>
    );
  }
}

export default Form;