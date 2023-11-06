import { Link } from 'react-router-dom'
import './card.styles.css'

function Card({driver}) {

  const{name:{forename}, name:{surname}, teams, id} = driver


  return (
  
      <div className='card-container'>
        <Link to = {`/home/${id}`}>
        <h2>{forename}</h2>
        <h3>{surname}</h3>
        <p>{teams}</p>
        </Link>
        
        
      </div>
    
  )
}

export default Card