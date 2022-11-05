import './ListItem.css';

function ListItem({ name, listItemClickHandler, id, active }) {

  const onClickHandler = () => {
    listItemClickHandler(id, name);
  }

  return (
    <div className={ `list-item ${active ? "active": "" }` } onClick={ onClickHandler }>{ name }</div>
  )
}

export default ListItem;
