import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <Link to="/">rydes.</Link>
      </div>
      <div className="nav-links">
        <nav>
          <NavLink to="/ride">Get a ride</NavLink>
        </nav>
        <nav>
          <NavLink to="/about">Become a driver</NavLink>
        </nav>
        <nav>
          <NavLink to="/about">About</NavLink>
        </nav>
      </div>
      <div className="action-links">
        <Link to="/login">Sign in</Link>
        <Link to="/register">
          <div className="get-started">Get started</div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
