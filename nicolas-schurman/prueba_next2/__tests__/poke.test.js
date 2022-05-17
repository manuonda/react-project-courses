import { render, screen, waitFor} from '@testing-library/react'
import Poke from '../pages/poke';


describe('Poke', () => {
    it('renders pokemones', async() => {

        // global.fetch = jest.fn(() => Promise.resolve({
        //    json: () => Promise.resolve()    
        //   }) 
        // );

        const mockResults = [ {
            name : 'chanchito',
            url: 'https://wwww.dominio.com/pokemones/1'
        }]; 
        global.fetch = jest.fn().mockImplementation(url => {
           return new Promise( resolve => {
               resolve => ({
                   json : () =>  Promise.resolve({
                       results : mockResults
                   })
               })
           })
        });
        render(<Poke></Poke>)

        const loading =  screen.getByText('Cargando...');
        expect(loading).toBeInTheDocument();
        await waitFor(() => screen.getByText('Mi App Pokemones'));
        const element = screen.getByTestId(1);
        const anchor = element.children[0];
        expect(anchor).toHaveAttribute("href",'/pokemones/1');
        expect(anchor).thoHaveTextContent('chanchito');
    })
});