import "./NavLink.css"
import Home from "./Home"
import Blog from "./Blog"
import Cart from "./Cart"
import Notification from "./Notification"
import {Route, Routes} from "react-router-dom"

 const NavLink = () => {
   return (
     <div className='header-link'>
     <Routes>
     <Route path="/home"><Home/></Route>
     <Route path="/blog"><Blog/></Route>
     <Route path="/cart"><Cart/></Route>
     <Route path="/notification"><Notification/></Route>
     </Routes>
    </div>
   )
 }

 export default NavLink;