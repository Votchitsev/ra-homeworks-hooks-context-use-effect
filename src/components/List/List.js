import './List.css';
import ListItem from '../ListItem/ListItem';

function List({ list, listItemClickHandler, activeId }) {

  return (
    <div className='list'>
      { list.map(item => <ListItem 
        name={ item.name } 
        key={ item.id }
        id={ item.id }
        active={ activeId === item.id }
        listItemClickHandler={ listItemClickHandler } />) }
    </div>
  )
}

export default List;