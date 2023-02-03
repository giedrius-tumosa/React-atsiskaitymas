import FormNewPost from "../forms/FormNewPost";
import Heading from "../global/Heading";
import styles from "./addPostPage.module.scss";

const AddPostPage = () => {
  return (
    <section className={`${styles.newPostSection} ${styles.expand}`}>
      <Heading
        tag="h2"
        attributes={{ className: "formHeading" }}
        textContent="Add new post here:"
      />
      <FormNewPost />
    </section>
  );
};

export default AddPostPage;
