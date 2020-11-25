import logo from './logo.svg';
import './App.css';

import GlobalStateContext from './context/ContextProvider'
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <GlobalStateContext>
        <div className="container">
          <div className="app-wraper">
            <Header></Header>
          <TaskForm></TaskForm>
          <TaskList></TaskList>
     
          </div>
        </div>
      </GlobalStateContext>
    </div>
  );
}

export default App;
