import { useEffect, useState} from "react";

interface Sub {
  nick:string,
  avatar: string,
  subMonths: number,
  description?:string
}

const initialState = [
  
]

function App() {
  const [number, setNumber] = useState<number | string >(5); //number o string 
  const changeNumber = () => setNumber("3");
  const[ subs, setSubs] = useState([
     {
       nick: 'dadepelu',
       subMonts: 3,
       avatar: '',
       description: 'Informacion numero 1'
     },{
       nick: 'sergio_numero',
       subMonts: 4,
       avatar:'http://i.pravatar'
     }
  ]);

  return (
    <div className="App">
       <ul>
         {
           subs.map( sub => {
             return (<>
               <li key={sub.nick}>
                 <img src={sub.avatar} alt={`Avatar for ${sub.nick}`}>
                 </img>
                 <h4>{sub.nick} (<small>{ sub.subMonts}</small>)</h4>
                 <p>{sub.description?.substring(0,100)}</p>
               </li>
             </>)
           })
         }
       </ul>
       <button onClick={changeNumber}>Change Numer</button>
    </div>
  );
}

export default App;
