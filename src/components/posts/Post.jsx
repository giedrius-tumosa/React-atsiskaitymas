import Heading from "../global/Heading";
import Paragraph from "../global/Paragraph";
import styles from "./post.module.scss";

const Post = ({ post }) => {
  return (
    <article className={styles.post}>
      <Heading
        tag="h3"
        attributes={{ className: `${styles.postTitle}` }}
        textContent={post.postTitle}
      />
      <Paragraph className={styles.postDescription} textContent={post.postDescription} />
    </article>
  );
};

export default Post;
