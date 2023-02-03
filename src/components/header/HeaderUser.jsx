import Logo from "../other/Logo";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../../store/UserContext";
import { useContext } from "react";
import styles from "./header.module.scss";
import Heading from "../global/Heading";

const HeaderUser = () => {
  const { userLoggedIn, setUserLoggedIn } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
    setUserLoggedIn(false);
  };

  return (
    <header className={`${styles.header} ${styles.headerUser}`}>
      <Logo to="/home" />
      <nav className={`${styles.headerUser__nav}`}>
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
      <Heading
        tag="h2"
        textContent="DISCOUNT HUNTER"
        attributes={{ className: styles.header__title }}
      />
    </header>
  );
};

export default HeaderUser;
