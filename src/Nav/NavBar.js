import { NavLink } from "react-router-dom";

const NavBar = ({ navigations, handlenavChange }) => {
  const navs = navigations.map((nav) => {
    return (
      <li key={nav}>
        <NavLink to={`/${nav}`} onClick={handlenavChange}>
          {nav}
        </NavLink>
      </li>
    );
  });
  return (
    <nav>
      <div className="nav-container">
        <ul className="nav-list-container">{navs}</ul>
      </div>
    </nav>
  );
};

export default NavBar;
