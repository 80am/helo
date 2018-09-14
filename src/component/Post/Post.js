import React, { Component } from 'react';

// import routes from './routes.js'
//import {Route} from 'react-router-dom' 

// import Routes from './routes'

class Post extends Component {

  constructor(props) {
    super(props)

    this.state = {
      title: '',
      img:'',
      content:'',
      author:'',
      authorPicture:''
    }
  }

  render() {
    return (
      <section>
          <p>Post</p>
      </section>
    );
  }
}

export default Post;