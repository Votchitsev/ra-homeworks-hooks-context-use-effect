import { useEffect, useState } from 'react';
import './Details.css';

function Details( { info }) {

  const [details, setDetails] = useState({});
  const [userId, setUserId] = useState(info.id);
  const [avatar, setAvatar] = useState();

  if (userId !== info.id) {
    setUserId(info.id);
  }

  useEffect(() => {
    fetch(process.env.REACT_APP_USER + `${userId}.json`)
      .then(response => response.json())
      .then(response => {
        setDetails(() => response.details);
        setAvatar(() => response.avatar);
      })
  }, [userId])

  return (
    <div className="details">
      <img className='avatar' src={ avatar } alt='Avatar'/>
      <div className='details-name'>{ info.name }</div>
      <div className='details-info'>{ `City: ${details.city}` }</div>
      <div className='details-info'>{ `Company: ${details.company}` }</div>
      <div className='details-info'>{ `Position: ${details.position}` }</div>
    </div>
  )
}

export default Details;
