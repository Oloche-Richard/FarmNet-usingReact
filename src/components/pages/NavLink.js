import "./NavLink.css"
import Home from "./Home"
import Blog from "./Blog"
import Cart from "./Cart"
import Notification from "./Notification"
import {Link} from "react-router-dom"

 const NavLink = () => {
   return (
     <nav className='header-link'>
        <ul>
          <li>
            <Link to='/'>
              <Home/>
            </Link>
          </li>
          <li>
            <Link to='/blog'>
              <Blog/>
            </Link>
          </li>
          <li>
            <Link to='/cart'>
              <Cart/>
            </Link>
          </li>
          <li>
            <Link to='/notification'>
              <Notification/>
            </Link>
          </li>
        </ul>
    </nav>
   )
 }

 export default NavLink;