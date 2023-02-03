import Post from "./Post";
import PostContext from "../../store/PostContext";
import { useContext, useEffect } from "react";
import Loading from "./Loading";

const PostsDisplay = () => {
  const { posts, postFetchErrors, getPosts, postsLoading, setUserFetchErrors } =
    useContext(PostContext);

  useEffect(() => {
    setUserFetchErrors({ ...postFetchErrors, getError: "" });
    getPosts();
  }, []);

  return (
    <section className="postsDisplay">
      {!postsLoading && posts.map((post) => <Post key={post.id} post={post} />)}
      {postsLoading && <Loading />}
      {postFetchErrors.getError && <p>{postFetchErrors.getError}</p>}
    </section>
  );
};

export default PostsDisplay;
