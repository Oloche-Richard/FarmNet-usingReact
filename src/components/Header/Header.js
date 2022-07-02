import "./Header.css"
import NavLink from ".../pages/NavLink"
function Header(props) {

  return (
    <div>
      <h2 className="header">{props.headerText}</h2>
      <NavLink/>
    </div>
  );
}

export default Header;