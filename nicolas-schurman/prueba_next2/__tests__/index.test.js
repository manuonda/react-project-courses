import { render, screen} from '@testing-library/react'
import Index, {getStaticProps} from '../pages/index';


describe('Index',() => {
    
    describe('Component',() => {
       it('se renderiza', () => {
         
          // solamente el componente
          const { getByTestId } =  render(
            <Index pokemones={[{ name:'Chanchito Feliz', url:'/pokemon/detalle/1'}]}></Index>
         );


          // elementos dentro de mi documento todo el documento
          const paragraph =  screen.getByText('Mi App Pokemonoes');
          //console.log(paragraph)
          expect(paragraph).toBeInTheDocument();

          const paragraphById = getByTestId('titulo');
          //console.log(paragraphById)
       
          // Dinamicamente se renderiz el componente y establece el nombre como 'Chanchito Feliz'
          const chanchito  = screen.getByText('Chanchito Feliz');
          expect(chanchito).toBeInTheDocument();
          //console.log(chanchito.getAttribute('href'));
          const url  = chanchito.getAttribute('href');
          expect(url).toEqual('/pokemons/1');
        
        })
    });
    
    describe('Index', () => {
        it('suma 2 + 2 ', ()=>{
         
        });
    })

    describe('getStaticProps', () => {
       it('return de pokemons', async () =>{
            // jest.fn() crea una function que tendra un comporamiento definido
        // en este caso se usara para fetch
        global.fetch = jest.fn()
        .mockImplementation( url => {
            return new Promise(resolve => {
                resolve({
                    json:() => Promise.resolve({
                        results: 'lista de pokemones'
                    })
                })
            })
        });
        const { props} = await getStaticProps();
        expect(props.pokemones).toBe('lista de pokemones');
       })
    });
})

