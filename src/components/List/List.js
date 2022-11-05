import { useEffect, useState } from 'react';
import './List.css';
import ListItem from '../ListItem/ListItem';

function List() {

  let [list, setList] = useState([]);

  useEffect(() => {
    fetch(process.env.REACT_APP_USERS)
      .then(response => response.json())
      .then(response => setList(response))
  }, [])

  return (
    <div className='list'>
      { list.map(item => <ListItem name={ item.name } key={ item.id }/>) }
    </div>
  )
}

export default List;