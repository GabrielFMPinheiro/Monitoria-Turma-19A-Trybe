import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addClient } from '../redux/actions';

class Cadastro extends Component {
  constructor(props) {
    super(props);

    this.state= {
      nome: '',
      idade: '',
      email: '',
    }
  }

  inputHandler = ({target: {name, value}}) => {
    this.setState({[name]: value})
  }

  saveUser = (e) => {
    e.preventDefault();
    const {saveUser} = this.props;
    const {nome, idade, email} = this.state;

    saveUser({nome, idade, email})

    this.setState({nome: '', idade: '', email: ''})
  }

  render() {
    const {nome, idade, email} = this.state;

    return (
      <div>
        <form onSubmit={this.saveUser}>
        <label htmlFor="nome">
            Nome:
            <input type="text" name="nome" id="nome" onChange={this.inputHandler} value={nome}/>
          </label>

          <label htmlFor="idade">
            Idade:
            <input type="number" name="idade" id="idade" onChange={this.inputHandler} value={idade}/>
          </label>

          <label htmlFor="email">
            Email:
            <input type="email" name="email" id="email" onChange={this.inputHandler} value={email}/>
          </label>

          <button type="submit">Salvar</button>

          <Link to="/clientes">Clientes</Link>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  saveUser: (client) => dispatch(addClient(client))
})

export default connect(null, mapDispatchToProps)(Cadastro);