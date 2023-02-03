import { createContext, useState } from "react";

const ENDPOINT_POSTS = "http://localhost:5000/posts";

const PostContext = createContext();

const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [postsLoading, setPostsLoading] = useState(false);
  const [postFetchErrors, setPostFetchErrors] = useState({
    getError: "",
    postError: "",
  });

  const getPosts = async () => {
    try {
      setPostsLoading(true);
      const response = await fetch(ENDPOINT_POSTS);
      if (!response.ok) throw Error("Posts could not be retrieved from the server. Try later.");
      const postsData = await response.json();
      setPosts(postsData);
      setPostFetchErrors({ ...postFetchErrors, getError: "" });
    } catch (error) {
      setPostFetchErrors({ ...postFetchErrors, getError: error.message });
    } finally {
      setPostsLoading(false);
    }
  };

  const addNewPost = async (newPost) => {
    try {
      setPosts([...posts, newPost]);
      const response = await fetch(ENDPOINT_POSTS, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPost),
      });
      if (!response.ok) throw Error("Error: could not upload a new post to the server. Try later");
      setPostFetchErrors({ ...postFetchErrors, postError: "" });
    } catch (error) {
      setPostFetchErrors({ ...postFetchErrors, postError: error.message });
      setPosts([...posts]);
    }
  };

  return (
    <PostContext.Provider
      value={{
        posts,
        postFetchErrors,
        getPosts,
        postsLoading,
        addNewPost,
        setPostFetchErrors,
        setPosts,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

export { PostProvider };
export default PostContext;
