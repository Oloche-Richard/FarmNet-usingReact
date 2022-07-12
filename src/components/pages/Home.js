import "./Home.css"
import {FontAwesomeIcon}  from '@fortawesome/react-fontawesome'
import {faHouse} from '@fortawesome/free-solid-svg-icons'
const Home =() => {
  return (  
    <div style={{display:'flex', alignItems:'center', gap: '5px'}}>
    <FontAwesomeIcon icon={faHouse} />    
  <h3 className='home'>Home</h3>
    </div>
  )
}

export default Home;