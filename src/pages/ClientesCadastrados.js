import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class ClientesCadastrados extends Component {
  render() {
    const { email, clients } = this.props;

    if(email === '') return <div><h1>Login não efetuado</h1></div>

    return (
      <div>
        <p>ClientesCadastrados</p>

        {
          clients.length ? (
            clients.map(({nome, idade, email}) => (
              <div>
                <p>{nome}</p>
                <p>{idade}</p>
                <p>{email}</p>
              </div>
            )))
            : (<p>Nenhum cliente cadastrado</p>)
        }


        <Link to="/cadastro">Cadastro</Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.userReducer.email,
  clients: state.clientReducer.clients,
})

export default connect(mapStateToProps)(ClientesCadastrados);