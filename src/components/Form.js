import React, { Component } from "react";

import Card from "./Card";

const INITIAL_STATE = {
  name: "",
  email: "",
  states: "ES",
  showDataOnCard: false,
};
// Criamos uma const que representa o estado inicial do nosso this.state. O objetivo aqui é que caso a gente queira resetar os dados da nossa aplicação, basicamente precisamos chamar o this.setState(INITIAL_STATE)

class Form extends Component {
  constructor() {
    super();

    this.state = INITIAL_STATE;

    this.handleChange = this.handleChange.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
  }

  handleChange({ target }) {
    let { name, value } = target;
    if (name === "name") value = value.toUpperCase();
    // Esse if está identificado qual input estamos acessando e caso seja o do "name", ele vai mudar o value dele para maiúsculo.

    this.setState({ [name]: value });
    // Está é uma função de atualização do estado genérica para casos como o do forms. Essencial que o atributo name dos elementos do forms(inputs, selects) seja igual ao nome da chave do nosso estado.
  }

  validateEmail() {
    // regex para validar o email: ref: https://regexr.com/3e48o
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

    if (!regex.test(this.state.email)) {
      alert("email errado");
    }
    //Funcão criada somente para exemplicar que caso o email salvo no estado não atenda o Regex, emita um alert
  }

  render() {
    const { name, email, showDataOnCard } = this.state;
    // Descontrução do nosso estado para que a gente não precisa ficar colocando por exemplo "this.state.name" e sim, somente "name", no nosso return.

    return (
      <form>
        <fieldset>
          <legend>Dados Formulário</legend>

          <label htmlFor="name">
            Nome:
            <input
              id="name"
              type="text"
              name="name"
              // Esse name é chave do negócio. Ele vai pemitir criar uma função, no caso desse código é a função handleChange, genérica, isto é, que eu consiga utilizar para outros components(inputs, selects) do nosso formulário.
              maxLength={30}
              required
              value={name}
              // value é igual a chave correspondente no estado. Isso é necessário para que a gente consiga controlar o value do mesmo. Por exemplo, podemos criar uma função para limpar esse value através de um botão.
              onChange={this.handleChange}
              // A funcão acima é a mesma que: onChange={(event) => this.handleChange(event)}
            />
          </label>

          <label htmlFor="email">
            Email:
            <input
              type="email"
              name="email"
              maxLength={50}
              required
              onChange={this.handleChange}
              value={email}
            />
          </label>
        </fieldset>

        <button type="button" onClick={this.validateEmail}>
          Validate Email
        </button>
        {/* Botão criado para exemplificar a validação do e-mail */}

        <button
          type="button"
          onClick={() => this.setState({ showDataOnCard: true })}
        >
          Mostar o nome no component Card
        </button>
        {/* Esse botão vai atualizar a chave showDataOnCard e só depois disso que as informações vão aparecer no component Card abaixo. Essa é uma forma de controlar se as informações de um componente devem ou não aparecer */}

        <Card nome={name} validate={showDataOnCard} />
        {/* Componente criado para mostrar a passagem de props com uma informação do estado */}
      </form>
    );
  }
}

export default Form;
