import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe('App' , () => {
     test('Component App' , () => {
       //se renderiza el component 
       render(<App/>)
       //screen 
       // get : consultas sincronas, sino existe va a aparecer un 
       // error
       const title = screen.getByText(/hola mundo/i);
       expect(title).toBeInTheDocument();
       
       //find permite realizar consultas asyncronas

      });
})