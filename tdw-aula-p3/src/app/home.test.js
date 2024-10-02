// Home.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // Para asserções como .toBeInTheDocument()
import Home from './page'; // Certifique-se de que o caminho para o componente está correto

test('verifica se o componente Home é renderizado com o texto correto', () => {
  // Renderiza o componente
  render(<Home />);

  // Verifica se o texto esperado está no documento
  const welcomeText = screen.getByText(/Welcome to the Home page!/i);
  expect(welcomeText).toBeInTheDocument();
});
