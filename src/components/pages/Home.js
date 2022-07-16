import "./Home.css"
import {IconContext} from "react-icons"
import { IconName } from "react-icons/fa";
import {FaTwitter}  from "react-icons/fa"

const Home = () => {
  return (  
    <IconContext.provider>
    <div style={{display:'flex', alignItems:'center', gap: '5px'}}>
  <h3 className='home'>Home</h3>
  <FaTwitter/>
    </div>
    </IconContext.provider>
  )
}

export default Home;