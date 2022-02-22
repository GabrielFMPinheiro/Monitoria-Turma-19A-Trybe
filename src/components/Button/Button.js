import React, { Component } from "react";

import "./Button.css";

class Button extends Component {
  render() {
    const { children, btnHandler, isDisabled } = this.props;
    return (
      <button
        className={children === "Próximo Pokemon" ? "next-btn" : "filter-btn"}
        type="button"
        onClick={btnHandler}
        disabled={isDisabled}
      >
        {children}
      </button>
    );
  }
}

export default Button;
