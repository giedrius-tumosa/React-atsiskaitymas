import { Outlet } from "react-router-dom";
import HeaderUser from "../header/HeaderUser";
import PostDisplay from "../posts/PostsDisplay";

const HomePage = () => {
  return (
    <>
      <HeaderUser />
      <main>
        <Outlet />
        <PostDisplay />
      </main>
    </>
  );
};

export default HomePage;
