import PropTypes from "prop-types";
import React, { Component } from "react";

export class Card extends Component {
  render() {
    const { validate, nome } = this.props;
    return <>{validate && <div>{nome}</div>}</>;
  }
}

Card.propTypes = {
  nome: PropTypes.string.isRequired,
  validate: PropTypes.bool.isRequired,
};

export default Card;
