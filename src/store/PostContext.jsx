import { createContext, useState, useEffect } from "react";

const ENDPOINT_POSTS = "http://localhost:5000/posts";

const PostContext = createContext();

const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [postsLoading, setPostsLoading] = useState(false);
  const [postsError, setPostsError] = useState("");

  const getPosts = async () => {
    try {
      setPostsLoading(true);
      const response = await fetch(ENDPOINT_POSTS);
      if (!response.ok) throw Error("Posts could not be retrieved from the server. Try later.");
      const postsData = await response.json();
      setPosts(postsData);
      setPostsError("");
    } catch (error) {
      setPostsError(error.message);
    } finally {
      setPostsLoading(false);
    }
  };

  return (
    <PostContext.Provider value={{ posts, postsError, getPosts, postsLoading }}>
      {children}
    </PostContext.Provider>
  );
};

export { PostProvider };
export default PostContext;
