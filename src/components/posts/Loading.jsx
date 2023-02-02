import styles from "./loading.module.scss";

const Loading = () => {
  return (
    <div className={styles.loading}>
      <p>Loading...</p>
      <div className={styles.loadingIcon}></div>
    </div>
  );
};

export default Loading;
