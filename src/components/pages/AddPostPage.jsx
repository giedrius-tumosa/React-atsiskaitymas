import { useState } from "react";
import FormNewPost from "../forms/FormNewPost";
import Heading from "../global/Heading";
import styles from "./addPostPage.module.scss";

const AddPostPage = () => {
  const [expand, setExpand] = useState(true);

  return (
    <section className={`${styles.newPostSection} ${expand ? styles.expand : styles.condense}`}>
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
