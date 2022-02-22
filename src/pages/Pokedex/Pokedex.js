import React from "react";

import Button from "../../components/Button/Button";
import Pokemon from "../../components/Pokemon/Pokemon";

import "./Pokedex.css";

class Pokedex extends React.Component {
  constructor(props) {
    // constructor: método permite que a gente consigar setar algumas configurações iniciais na nossa página

    super(props);
    // super: permite a gente acessar as propriedades da nossa classe, nesse caso React.Components

    this.state = {
      index: 0,
      pokemons: this.props.pokemons,
      statusBtn: false,
    };

    this.nextPokemon = this.nextPokemon.bind(this);
    this.filterByType = this.filterByType.bind(this);
    this.resetPokemons = this.resetPokemons.bind(this);
    // bind: necessário para que a gente tenha acesso ao this em nossas funções
  }

  nextPokemon() {
    this.setState(({ pokemons, index }) => {
      //Essa lógica garante que ao chegar no fim do array, independente do filtro, retorne a posição 0
      return {
        index: index === pokemons.length - 1 ? 0 : index + 1,
      };
    });
  }

  filterByType(type) {
    // Essa lógica salvará o nosso array de pokemons filtrados no nosso estado;
    // obs: sempre utilizamos o array bruto, ou seja, com todos os objetos(pokemons) e em seguinda fazemos o filtro
    this.setState((_prevState, { pokemons }) => ({
      pokemons: pokemons.filter((pokemons) => pokemons.type === type),
      // sempre quando haver um filtro, o index volta a ser 0, ou seja, para a posição inicial do novo array filtrado
      index: 0,
    }));
  }

  resetPokemons() {
    // Lógica para o botão "all" / Retorna o array de pokemons padrão
    this.setState((_prevState, { pokemons }) => ({
      pokemons: pokemons,
      index: 0,
    }));
  }

  render() {
    const { pokemons, index } = this.state;
    return (
      <div className="pokedex">
        <Pokemon pokemon={pokemons[index]} />

        <div className="btn-container">
          <Button btnHandler={this.resetPokemons}>All</Button>
          {/* A função "new Set" retorna para gente um array sem duplicados, porém Set não é um array, para isso foi feito um spread('...') antes envolta de "[]" para que um array seja criado */}
          {[...new Set(this.props.pokemons.map(({ type }) => type))].map(
            (type) => (
              <Button key={type} btnHandler={() => this.filterByType(type)}>
                {type}
              </Button>
            )
          )}
        </div>

        <Button
          btnHandler={this.nextPokemon}
          isDisabled={this.state.pokemons.length === 1}
          // Essa lógica fará que quando o array de pokemons após o filtro tiver tamanho 1, o botão estará desabilitado.
        >
          Próximo Pokemon
        </Button>
      </div>
    );
  }
}

export default Pokedex;
