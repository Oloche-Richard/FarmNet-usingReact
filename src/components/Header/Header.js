import "./Header.css"
import NavLink from "./../pages/NavLink"
// import {Routes , Route } from "react-router-dom"
function Header(props) {

  return (
    <div className='header'>
      <h2 className="header-text">{props.headerText}</h2>
      <NavLink/>
    </div>
  );
}

export default Header;