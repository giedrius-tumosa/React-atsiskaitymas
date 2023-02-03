import Paragraph from "../global/Paragraph";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Paragraph
        className={styles.copyright}
        textContent={`'Discount Hunter' - ©Copyright - ${new Date().getFullYear()}`}
      />
    </footer>
  );
};

export default Footer;
