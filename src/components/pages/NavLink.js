import "./NavLink.css"
import Home from "./Home"
import Blog from "./Blog"
import Cart from "./Cart"
import Notification from "./Notification"

 const NavLink = () => {
   return (
     <div className='header-link'>
     <Home/>
     <Blog/>
     <Cart/>
     <Notification/>
    </div>
   )
 }

 export default NavLink;