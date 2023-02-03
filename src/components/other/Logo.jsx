import FigureImage from "../global/FigureImage";
import styles from "./logo.module.scss";
import { Link } from "react-router-dom";

const Logo = ({ to }) => {
  return (
    <Link to={to}>
      <FigureImage
        className={styles.logoImage}
        attributes={{
          src: "https://cdn-icons-png.flaticon.com/512/241/241516.png",
          alt: "Company logo image.",
          width: "40",
          height: "auto",
        }}
      />
    </Link>
  );
};

export default Logo;
