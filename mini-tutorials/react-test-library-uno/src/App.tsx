import React , { useState } from 'react';
import './App.css';
import Search from './components/Search';

//https://www.robinwieruch.de/react-testing-library/

function getUser() {
  return Promise.resolve({ id: '1', name: 'Robin' });
}

function App() {
  const[search, setSearch] = useState();
  const [user, setUser] = React.useState({});

  React.useEffect(() => {
    const loadUser = async () => {
      const user = await getUser();
      setUser(user);
    };

    loadUser();
  }, []);

  const handleChange = (e:any) => {
    setSearch(e.target.value);
  }
  return (
    <div>
      {user ? <p>Signed in as {user.name}</p> : null}
    <Search value={search} onChange={handleChange}>
      Search:
    </Search>

    <p>Searches for {search ? search : '...'}</p>
  </div>
  );
}

export default App;
