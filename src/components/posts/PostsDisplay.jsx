import Post from "./Post";
import PostContext from "../../store/PostContext";
import { useContext, useEffect } from "react";
import Loading from "./Loading";
import styles from "./postDisplay.module.scss";
import ErrorMessage from "../other/ErrorMessage";

const PostsDisplay = () => {
  const { posts, postFetchErrors, getPosts, postsLoading, setPostFetchErrors } =
    useContext(PostContext);

  useEffect(() => {
    setPostFetchErrors({ ...postFetchErrors, getError: "" });
    getPosts();
  }, []);

  return (
    <section className={styles.postsDisplay}>
      {postsLoading ? (
        <Loading />
      ) : (
        postFetchErrors.getError && <ErrorMessage message={postFetchErrors.getError} />
      )}
      {!postsLoading &&
        !postFetchErrors.getError &&
        posts.map((post) => <Post key={post.id} post={post} />)}
    </section>
  );
};

export default PostsDisplay;
