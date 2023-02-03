import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../store/UserContext";

const FormUserLogin = () => {
  const { users, userLoggedIn, setUserLoggedIn } = useContext(UserContext);
  const navigate = useNavigate();

  const [formInputs, setFormInputs] = useState({
    userEmail: "",
    userPassword: "",
  });
  const [loginError, setLoginError] = useState("");

  const handleInputChange = (e) => {
    setFormInputs({ ...formInputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userExists = users.some(
      (user) =>
        formInputs.userEmail === user.userEmail && formInputs.userPassword === user.userPassword
    );
    setUserLoggedIn(userExists);
    !userExists && setLoginError("Incorrect username or password.");
    setFormInputs({
      userEmail: "",
      userPassword: "",
    });
  };

  useEffect(() => {
    userLoggedIn && navigate("/home");
  }, [userLoggedIn]);

  return (
    <div className="formUserLogin">
      <form onSubmit={handleSubmit}>
        <div className="userEmailWrap">
          <label htmlFor="userEmail">Email: </label>
          <input
            type="email"
            id="userEmail"
            name="userEmail"
            onChange={handleInputChange}
            required
            value={formInputs.userEmail}
          />
        </div>

        <div className="userPasswordWrap">
          <label htmlFor="userPassword">Password: </label>
          <input
            type="password"
            id="userPassword"
            name="userPassword"
            onChange={handleInputChange}
            required
            value={formInputs.userPassword}
          />
        </div>

        <div className="buttonSubmit">
          <button type="submit">Login</button>
        </div>
        {loginError && <p>{loginError}</p>}
      </form>
    </div>
  );
};

export default FormUserLogin;
