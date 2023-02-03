import Logo from "../other/Logo";
import { Link } from "react-router-dom";
import styles from "./header.module.scss";
import Heading from "../global/Heading";

const HeaderInitial = () => {
  return (
    <header className={styles.header}>
      <Logo to="/" />
      <nav className={`${styles.headerInitial__nav}`}>
        <ul>
          <li>
            <Link to="/">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </nav>
      <Heading
        tag="h2"
        textContent="DISCOUNT HUNTER"
        attributes={{ className: styles.header__title }}
      />
    </header>
  );
};

export default HeaderInitial;
