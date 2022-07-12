import "./Header.css"
import NavLink from "./../pages/NavLink"
// import {Routes , Route } from "react-router-dom"
function Header(props) {

  return (
    <div className='header'>
       <div className="logo">
            <div className="green"></div>
            <div className="yellow"></div>
            <div className="blue"></div>
      <h2 className="header-text">{props.headerText}</h2>
       </div>
      <NavLink/>
    </div>
  );
}

export default Header;