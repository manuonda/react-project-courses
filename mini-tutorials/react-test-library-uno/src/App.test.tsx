import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('renders learn react link', async() => {
   render(<App />);
  expect(screen.getByText(/search:/i)).toBeInTheDocument();

  expect(screen.getByRole('textbox')).toBeInTheDocument();

  expect(screen.getByLabelText(/search/i)).toBeInTheDocument();
  
  expect(screen.queryByText(/Searches for Javascript/)).toBeNull();


  //  Returns the matching node for a query, and return null if no elements match. 
  // This is useful for asserting an element that is not present. 
  // Throws an error if more than one match is found (use queryAllBy instead if this is OK).
  expect(screen.queryByText(/Signed in as /i)).toBeNull();
  //expect(screen.queryByText(/Signed in as/)).toBeNull();
  // eslint-disable-next-line testing-library/no-debugging-utils
  //screen.debug();   
  // find use sync await
  expect(await screen.findByText(/Signed in as/)).toBeInTheDocument();
  //screen.debug();

      // wait for the user to resolve
    // needs only be used in our special case
  await screen.findByText(/Signed in as/i );
  
  expect(screen.queryByText(/Searches for Javascript/)).toBeNull();


  //events se ejecuta a mostrar el input text
  /*fireEvent.change(screen.getByRole('textbox'), {
     target: { value : 'Javascript'}
  });

  expect(screen.getByText(/Searches for Javascript/)).toBeInTheDocument();
  */

   // User Event 
   await userEvent.type(screen.getByRole('textbox'),'Javascript');

   expect(
     screen.getByText(/Searches for Javascript/)
   ).toBeInTheDocument();
});
