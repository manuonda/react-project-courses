import { useEffect , useState} from "react"

const API_URL = 
export function App(){
    
    const[fact, setFact]  = useState("");

    useEffect(() => {
        
        fetch('https://catfact.ninja/fact')
        .then(res => res.json())
        .then(data => setFact(data));

    }, [])
    
    return(
        <>
        <h1>hola que onda </h1>
        </>
    )
}

