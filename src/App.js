import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import Cadastro from './pages/Cadastro';
import ClientesCadastrados from './pages/ClientesCadastrados';
import Home from './pages/Home';
import Login from './pages/Login';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/login" component={Login}/>
          <Route path="/clientes" component={ClientesCadastrados} />
          <Route path="/cadastro" component={Cadastro} />
        </Switch>
      </div>
    );
  }
}

export default App;