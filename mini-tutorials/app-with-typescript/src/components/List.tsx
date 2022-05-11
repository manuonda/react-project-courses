import React from 'react'
import { isPropertySignature } from 'typescript'
import { Sub } from '../types'


// se utiliza como argumento en la lista estableciendo los tipos
interface IProps {
   subs: Array<Sub>
};


//const List:React.FC<IProps>  : Midudev no lo utiliza
const List  = ({subs}: IProps) => {  

   // algunas veces algunos usuarios tiene un render
   // list para poder especificar el tipo  
  const renderList  = ():JSX.Element[] => {
    return  subs.map(sub => {
        return (<>
          <li key={sub.nick}>
            <img src={sub.avatar} alt={`Avatar for ${sub.nick}`}>
            </img>
            <h4>{sub.nick} (<small>{sub.subMonths}</small>)</h4>
            <p>{sub.description?.substring(0, 100)}</p>
          </li>
        </>)
      })
  }


  return (
    <>
     <ul>
         { renderList()}
    </ul> 
    </>
  )
}

export default List;

