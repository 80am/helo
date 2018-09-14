import React, { Component } from 'react';
import Auth from './component/Auth/Auth'
// import Nav from './component/Nav/Nav'
import Form from './component/Form/Form'
import Dashboard from './component/Dashboard/Dashboard'
import Post from './component/Post/Post'
import './App.css';
import Nav from './component/Nav/Nav';
import routes from './routes'

class App extends Component {
  render() {
    return (
      <section>
        <div className="App">
          <Nav />
          {routes}
        </div>
      </section>
    );
  }
}

export default App;
