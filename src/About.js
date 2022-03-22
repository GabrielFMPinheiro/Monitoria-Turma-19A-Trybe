import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div>
        {['CSS', 'HTML', 'JAVASCRIPT'].map((atividade) => {
          return <p data-testid="atividade" key={atividade}>{atividade}</p>
        })}
      </div>
    );
  }
}

export default About;