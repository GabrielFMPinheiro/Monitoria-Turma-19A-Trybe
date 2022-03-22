import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event'
import About from './About';

const atividadesTrybe = ['CSS', 'HTML', 'JAVASCRIPT']

it('teste se as atividade aparecem', () => {
  render(<About />)

  const atividades = screen.getAllByTestId('atividade')

  atividades.forEach((atividade, index) => {
    expect(atividade).toHaveTextContent(atividadesTrybe[index])
  })
})