import  React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Item } from './models'
import itemService from './services/item.service'


const App : React.FC = () =>  {
  
  const [items, setItems] = React.useState<Item[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);
  React.useEffect(() => {
     itemService.list().then((result:Item[]) => {
       setItems(result);
       setLoading(false);
     })     
  },[]);

  if (loading) {
    return <>Loading</>
  }

  return (
    <div className="App">
      Items {items?.length}
    </div>
  )
}

export default App
