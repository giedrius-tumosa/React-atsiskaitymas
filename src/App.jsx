import "./styles/App.scss";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./components/pages/LoginPage";
import RegisterPage from "./components/pages/RegisterPage";
import HomePage from "./components/pages/HomePage";
import AddPostPage from "./components/pages/AddPostPage";
import NotFound from "./components/pages/NotFound";
import UserContext from "./store/UserContext";
import PostContext from "./store/PostContext";
import { useContext, useEffect } from "react";

function App() {
  const { getUsers } = useContext(UserContext);
  const { getPosts, setPosts } = useContext(PostContext);

  useEffect(() => {
    setPosts([]);
    getUsers();
    getPosts();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="home" element={<HomePage />}>
          <Route path="add" element={<AddPostPage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
