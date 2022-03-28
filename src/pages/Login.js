import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveEmail } from '../redux/actions';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state= {
      email: '',
      password: '',
      isButtonDisabled: true,
    }
  }

  inputHandler = ({target: {name, value}}) => {
    this.setState({[name]: value}, this.validateForms)
  }

  validateForms = () => {
    const {email, password} = this.state;
    const REGEX = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/

    if(REGEX.test(email) && password !== '') {
      this.setState({isButtonDisabled: false})
    } else {
      this.setState({isButtonDisabled: true})
    }
  }

  formHandler = (e) => {
    e.preventDefault();
    const {state: {email}, props: {saveUserEmail, history}} = this;

    saveUserEmail(email);

    history.push('/clientes')
  } 
  

  render() {
    const {isButtonDisabled} = this.state;

    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.formHandler}>
          <label htmlFor="email">
            Email:
            <input type="email" name="email" id="email" onChange={this.inputHandler}/>
          </label>

          <label htmlFor="password">
            Password:
            <input type="password" name="password" id="password" onChange={this.inputHandler}/>
          </label>

          <button type="submit" disabled={isButtonDisabled}>Entrar</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  saveUserEmail: (email) => dispatch(saveEmail(email))
})

export default connect(null, mapDispatchToProps)(Login);