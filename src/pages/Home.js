import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Bem vindo!</h1>
        <Link to="/login">Login</Link>
      </div>
    );
  }
}

export default Home;