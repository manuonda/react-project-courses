
import React, {useState} from 'react'
import Routes from './Routes/index'


function App() {
  
  const [search, setSearch] = useState(null)
  const handleSearch = (product) => setSearch(product)



  return (
     <div>
      <Routes handlerSearch={handleSearch} search={search}></Routes>

     </div> 
    
  );
}

export default App;
