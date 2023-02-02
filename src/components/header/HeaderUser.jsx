import Logo from "../other/Logo";
import { Link } from "react-router-dom";

const HeaderUser = () => {
  return (
    <header className="header headerUser">
      <Logo />
      <nav className="headerInitial__nav">
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/home/add">Add post</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderUser;
