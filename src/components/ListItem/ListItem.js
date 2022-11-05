import './ListItem.css';

function ListItem({ name, listItemClickHandler, id }) {

  const onClickHandler = () => {
    listItemClickHandler(id, name);
  }

  return (
    <div className="list-item" onClick={ onClickHandler }>{ name }</div>
  )
}

export default ListItem;
