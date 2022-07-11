import { fireEvent, render , screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Search from "../components/Search";


describe('<Search/>', () => {
    test('calls the onChange callbaack handler', () => {
         const onChange = jest.fn();

         render(<Search value="" onChange={onChange}>
             Search: 
          </Search>)
  

    fireEvent.change( screen.getByRole('textbox') ,{
         target: { value : 'Javascript'}
    });

    expect(onChange).toHaveBeenCalledTimes(1);
    });

    test('calls the change callback handles' , async () => {
         const onChange = jest.fn();

         render(
             <Search value="" onChange={onChange}>
                 Search:
             </Search>
         )

         await userEvent.type(screen.getByRole('textbox'), 'JavaScript');

         expect(onChange).toHaveBeenCalledTimes(10);
    });
})