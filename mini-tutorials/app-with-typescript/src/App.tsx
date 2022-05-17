import { useEffect, useState ,useRef } from "react";
import Form from "./components/Form";
import List from "./components/List";
import { Sub , SubsResponseFromApi } from "./types";



interface AppState {
  subs: Array<Sub>,
  newsSubsNumber: number | string;
}

const INITIAL_STATE = [
  {
    nick: 'dadepelu',
    subMonths: 3,
    avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/6.png',
    description: 'Informacion numero 1'
  }, {
    nick: 'sergio_numero',
    subMonths: 4,
    avatar: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/7.png'
  }
];
function App() {
  const [number, setNumber] = useState<number | string>(5); //number o string 
  const changeNumber = () => setNumber("3");
  const [loading, setLoading] = useState<boolean>(true);
  // const[ subs, setSubs] = useState<Array<Sub>>([]);
  const [subs, setSubs] = useState<AppState["subs"]>([]); // useAppState of type subs
  const divRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    //setSubs(INITIAL_STATE);
    const fetchSubs = (): Promise<SubsResponseFromApi> => {
      return fetch('http://localhost:3001/subs').then(res => res.json());
    }

    const mapFromApiToSubs = (apiResponse : SubsResponseFromApi):
      Array<Sub> => apiResponse.map(subFromApi => {
      const {
        nick, months: subMonths, profileUrl: avatar, description
      } = subFromApi;
      return {
        nick,
        description,
        avatar,
        subMonths
      };
    })
    

    // fetchSubs()
    // .then( responseAPi => {
    //   const subs = mapFromApiToSubs(responseAPi);
    //   setSubs(subs);
    // })
    fetchSubs()
    .then(mapFromApiToSubs)
    .then(setSubs);
    setLoading(false);
  }, []);


  const handleNewSub = (newSub: Sub) => {
    setSubs([...subs, newSub]);
  }
  return (
    <div className="App" ref={divRef}>

      {loading ? "Cargando " :
        <>
          <List subs={subs}></List>
          <Form onNewSub={handleNewSub}></Form>  
        </>
      }

    </div>
  );
}

export default App;
