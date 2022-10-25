import "./appHeader.scss";
import { NavLink } from "react-router-dom";

function AppHeader() {
  return (
    <header className='app__header'>
      <nav className='app__nav'>
        <ul>
          <li>
            <NavLink to='/' end>
              Coffee house
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/coffee-page'
              style={({ isActive }) => ({
                textDecoration: isActive ? "underline" : "",
              })}
            >
              Our coffee
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/goods-page'
              style={({ isActive }) => ({
                textDecoration: isActive ? "underline" : "",
              })}
            >
              For your pleasure
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default AppHeader;
