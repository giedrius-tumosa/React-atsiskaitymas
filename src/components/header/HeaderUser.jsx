import Logo from "../other/Logo";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../../store/UserContext";
import { useContext } from "react";
import { useEffect } from "react";

const HeaderUser = () => {
  const { userLoggedIn, setUserLoggedIn } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
    setUserLoggedIn(false);
  };

  return (
    <header className="header headerUser">
      <Logo />
      <nav className="headerUser__nav">
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/home/add">Add post</Link>
          </li>
        </ul>
      </nav>
      <button className="buttonLogout" type="button" onClick={handleLogout}>
        Logout
      </button>
    </header>
  );
};

export default HeaderUser;
