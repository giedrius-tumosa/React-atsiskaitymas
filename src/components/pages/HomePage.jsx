import { Navigate, Outlet, useNavigate } from "react-router-dom";
import HeaderUser from "../header/HeaderUser";
import PostDisplay from "../posts/PostsDisplay";
import UserContext from "../../store/UserContext";
import { useContext } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const { userLoggedIn } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    !userLoggedIn &&
      setTimeout(() => {
        navigate("/");
      }, 10000);
  }, [userLoggedIn]);

  return (
    <>
      {userLoggedIn && (
        <>
          <HeaderUser />
          <main>
            <Outlet />
            <PostDisplay />
          </main>
        </>
      )}
      {!userLoggedIn && (
        <>
          <p>
            Please login to view the content. You will be redirected to the login page shortly. If
            you are not redirected, please use the link below.
          </p>
          <Link to="/">Login</Link>
        </>
      )}
    </>
  );
};

export default HomePage;
