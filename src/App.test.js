import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event'


const mockDigimon = [{
  name: "Agumon",
  img: "https://digimon.shadowsmith.com/img/agumon.jpg",
  level: "Rookie"
}]

const input = () => {
  return screen.getAllByRole('textbox', {
    name: /digimon/i
  })
}

const button = () => {
  return screen.getByRole('button', {
    name: /search digimon/i
  })
}

describe('A aplicação App', () => {
  it('aparece um input para digitação', async () => {
    render(<App />)

    expect(input()).toBeVisible();
  });

  it('aparece um button para fazer a requisição', async () => {
    render(<App />)

     expect(button()).toBeVisible();
  });

  it('deve rederizar um digimon na tela', async () => {

    jest.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve(mockDigimon)
    }))

    render(<App />)
    userEvent.type(input(), 'agumon')
    userEvent.click(button())

    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalled();
    })

    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledWith('https://digimon-api.vercel.app/api/digimon/name/agumon');
    })

    // await waitFor(() => {
    //   expect(screen.getByText(/level: rookie/i)).toBeVisible();
    // })

    const level = await screen.findByText(/level: rookie/i) 
    expect(level).toBeVisible();

  });
});
