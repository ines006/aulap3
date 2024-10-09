import React from 'react';
import { render } from '@testing-library/react';
import Home from './page';


describe('Home component', () => {

    const punycode = require('punycode');

    test('renders Home correctly', () => {
      const { asFragment } = render(<Home />);
      expect(asFragment()).toMatchSnapshot();
    });
  });