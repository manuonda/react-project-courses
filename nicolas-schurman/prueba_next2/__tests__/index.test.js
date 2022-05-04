import { render, screen} from '@testing-library/react'
import Index from '../pages/index';


describe('Index',() => {
    
    describe('Component',() => {
       it('se renderiza', () => {
         
          // solamente el componente
          const { getByTestId } =  render(
            <Index pokemones={[]}></Index>
         );


          // elementos dentro de mi documento todo el documento
          const paragraph =  screen.getByText('Mi App Pokemonoes');
          console.log(paragraph)
          expect(paragraph).toBeInTheDocument();

          const paragraphById = getByTestId('titulo');
          console.log(paragraphById)
       
        
        })
    });
    
    describe('Index', () => {
        it('suma 2 + 2 ', ()=>{
         
        });
    })
})

