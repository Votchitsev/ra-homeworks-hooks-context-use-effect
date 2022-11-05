import { useEffect, useState } from 'react';
import './App.css';
import List from './components/List/List';
import Details from './components/Details/Details';

function App() {
  let [list, setList] = useState([]);
  let [activeUser, setActiveUser] = useState(null);

  useEffect(() => {
    fetch(process.env.REACT_APP_USERS)
      .then(response => response.json())
      .then(response => setList(response))
  }, [])

  const listItemClickHandler = (id, name) => {
    setActiveUser({ id, name });
  }

  return (
    <div className="App">
      <List 
        list={ list } 
        listItemClickHandler={ listItemClickHandler }
        activeId={ activeUser ? activeUser.id : null }/>
        { activeUser ? <Details info={ activeUser } 
      /> : null } 
    </div>
  );
}

export default App;
