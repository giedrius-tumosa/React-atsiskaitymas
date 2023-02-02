import Logo from "../other/Logo";
import { Link } from "react-router-dom";

const HeaderInitial = () => {
  return (
    <header className="header headerInitial">
      <Logo />
      <nav className="headerInitial__nav">
        <ul>
          <li>
            <Link to="/">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderInitial;
