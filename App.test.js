import React from 'react';
import { render } from '@testing-library/react';
import App from './App';


describe('testing App component', ()=>{
	test('Dalia your forgot semicolon', () => {

	  const { getByText } = render(<App />);

	  const linkElement = getByText(/header/i);

	  expect(linkElement).toHaveTextContent('Dalia');

	});
})

