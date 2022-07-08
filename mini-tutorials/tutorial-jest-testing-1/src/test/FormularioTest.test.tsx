import { fireEvent, render, screen } from "@testing-library/react";
import { FormUsuario } from "../components/FormUsuario";



describe('<FormUsuario/>' , () => {
  
    beforeEach(() => {
      render(<FormUsuario/>);
    });  

   test("Label username", () => {
        const lastNameLabelEl = screen.getByLabelText(/user name/i);
        expect(lastNameLabelEl).toBeInTheDocument(); 
   });
   test('Label lastname', () => {
         const labelLastNameEl = screen.getByLabelText(/last name/i);
         expect(labelLastNameEl).toBeInTheDocument();
   });





   describe('When click Enviar', () => {
     beforeEach(() => {
         fireEvent.click(screen.getByRole("button", {  name: /Guardar/i}));
     }); 
    test('Button Click Enviar, render show text', () => {
        expect(screen.getByText(/usuario agregado/i)).toBeInTheDocument();
   });
   });

});