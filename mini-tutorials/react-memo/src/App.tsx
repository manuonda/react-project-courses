import React, {useState , useEffect , useMemo , useCallback } from 'react';
import List from "./components/List";
import  { User } from './type';


const initialUser: User[] = [
  { id: 1, firstName: "David" , lastName: "Garcia"},
  { id: 2 , firstName: "Andres", lastName: "Garcia"}
]
;
const App: React.FC = () =>  {
  const [users, setUsers] = useState<User[]>(initialUser);
  const [text, setText] = useState<string>("");
  const [search, setSearch] = useState<string>("");
  

  const handleAdd = () => {
     const newUser: User = {
        id: Date.now(),
        firstName: text
     }
     setUsers([...users, newUser]);
     setText("");
  };

  // useCallBack para guardar definiciones de funciones 
  // para evitar renderizados
  const handleDelete = useCallback((id: number) => {
      setUsers(users.filter( user => user.id !== id));
  },[users]);

  const handleSearch  = () => {
    setSearch(text);
  }

  const printUsers = useCallback(() => {
    console.log("changed users", users);
  },[users]);

  useEffect(() => {
    console.log("App Render");
     
  });
  useEffect(() => {
     printUsers();
  },[users, printUsers]);
// para crear propiedades computadas para que se memoricen
const filteredUsers = useMemo (() => 
      users.filter (user => {
      //console.log('filtered Users');
      return  user.firstName.toLowerCase().includes(search.toLowerCase());
     }) 
    , [search, users]);

  
  return (
    <div className="App">
      <input type="text" 
             value={text}
             onChange={(e) =>  setText(e.target.value)}
             />
      <button onClick={handleSearch}>Search</button>
      <button onClick={handleAdd}>Add</button>
      <List users={filteredUsers} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
