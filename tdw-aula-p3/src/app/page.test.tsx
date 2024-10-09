import React from 'react';
import { render } from '@testing-library/react';
import Home from './page';

// Importar punycode se realmente for necessário
// const punycode = require('punycode'); // Esta linha pode ser removida se punycode não for usado

describe('Home component', () => {
  
    test('renders Home correctly', () => {
      const { asFragment } = render(<Home />);
      expect(asFragment()).toMatchSnapshot();
    });
});
