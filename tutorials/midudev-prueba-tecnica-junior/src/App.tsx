import React ,  { useEffect , useState} from "react"
import './style.css'

const CAT_PREFIX_IMAGE_URL ='https://cataas.com';

export function App(){
    
    const[fact, setFact]  = useState("");
    const[imageUrl, setImageUrl] = useState("");
    const[factError, setFactError] = useState();

    // effect para recuperar la cita
    useEffect(() => {        
        fetch('https://catfact.ninja/fact')
        .then(res => {
            if(!res.ok) {
                throw new Error("Error fetching fact");
                //setFactError("No se ha podido recupear la cita");
            }
            return res.json()
        })
        .then(data => {
            const {fact}  = data;
            setFact(fact)
        }).catch(error => {
            //como si hay un error con la peticion
            //tanto como si hay un error con la respuesta
            
        });

    }, [])

    //effect para recuperar la imagen que cada vez que cambia la cita
    useEffect(() => {
        if(!fact) return 
        const threeFirstWords = fact.split(' ').slice(0,3).join(' ');
        console.log(threeFirstWords)

       fetch(`https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`)
       .then(res => res.json())
       .then(response => {
          console.log(response)
          const {url } = response;

          setImageUrl(url);
       })
    },[fact]);
    
    return(
        <main>
         <h1>hola que onda </h1>
         <p>{fact && <p>{fact}</p>}</p>
         { imageUrl && <img src={`${CAT_PREFIX_IMAGE_URL}${imageUrl}`}  alt={`Image extracted using first three words of ${fact}`}/>}
        </main>
    )
}
export default App;


