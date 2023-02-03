import Paragraph from "../global/Paragraph";
import styles from "./errorMessage.module.scss";

const ErrorMessage = ({ message }) => {
  return <Paragraph className={styles.errorMessage} textContent={message} />;
};

export default ErrorMessage;
