import Post from "./Post";
import PostContext from "../../store/PostContext";
import { useContext, useEffect } from "react";
import Loading from "./Loading";

const PostsDisplay = () => {
  const { posts, postsError, getPosts, postsLoading } = useContext(PostContext);

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <section className="postsDisplay">
      {!postsLoading && posts.map((post) => <Post key={post.id} post={post} />)}
      {postsLoading && <Loading />}
      {postsError && <p>{postsError}</p>}
    </section>
  );
};

export default PostsDisplay;
