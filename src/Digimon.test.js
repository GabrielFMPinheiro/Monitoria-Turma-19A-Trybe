import React from 'react';
import { render, screen } from '@testing-library/react';
import Digimon from './Digimon';

const mockDigimon = {
  name: "Agumon",
  img: "https://digimon.shadowsmith.com/img/agumon.jpg",
  level: "Rookie"
}

describe('A tela do Digimon', () => {
  beforeEach(() => render(<Digimon digimon={ mockDigimon }/>))

  it('aparece o nome do digimon', async () => {
    const title = screen.getByRole('heading', {name: /agumon/i, level: 2})

    expect(title).toBeVisible();
  });

  it('aparece o level do digimon', async () => {
    const level = screen.getByText(/level: rookie/i)

    expect(level).toBeVisible();
    expect(level).toContainHTML('p')
  });

  it('aparece a imagem do digimon', async () => {
    const imagem = screen.getByRole('img', {name: /agumon/i})

    expect(imagem).toBeVisible();
    expect(imagem).toHaveAttribute('src', 'https://digimon.shadowsmith.com/img/agumon.jpg')
  });
});
