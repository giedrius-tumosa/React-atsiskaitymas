import { useState, useContext, useEffect } from "react";
import { nanoid } from "nanoid";
import UserContext from "../../store/UserContext";
import { useNavigate } from "react-router-dom";

const FormNewUser = () => {
  const { addNewUser, users, setUserLoggedIn, userLoggedIn } = useContext(UserContext);

  const navigate = useNavigate();

  const [formInputs, setFormInputs] = useState({
    userEmail: "",
    userPassword: "",
    userPasswordRepeat: "",
  });

  const [formError, setFormError] = useState("");

  const handleInputChange = (e) => {
    setFormInputs({ ...formInputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const userExists = users.some((user) => formInputs.userEmail === user.userEmail);
    if (userExists) {
      setFormError(`User with email ${formInputs.userEmail} already exists.`);
      return;
    }
    if (formInputs.userPassword !== formInputs.userPasswordRepeat) {
      setFormError("Original and repeated passwords do not match.");
      return;
    }
    setFormError("");
    const newUser = {
      id: nanoid(),
      userEmail: formInputs.userEmail,
      userPassword: formInputs.userPassword,
    };
    addNewUser(newUser);
    setUserLoggedIn(true);
    setFormInputs({
      userEmail: "",
      userPassword: "",
      userPasswordRepeat: "",
    });
  };

  useEffect(() => {
    userLoggedIn && navigate("/home");
  }, [userLoggedIn]);

  return (
    <div className="formNewUser">
      <form onSubmit={handleSubmit}>
        <div className="userEmailWrap">
          <label htmlFor="userEmail">Email: </label>
          <input
            type="email"
            id="userEmail"
            name="userEmail"
            onChange={handleInputChange}
            value={formInputs.userEmail}
            required
          />
        </div>

        <div className="userPasswordWrap">
          <label htmlFor="userPassword">Password: </label>
          <input
            type="password"
            id="userPassword"
            name="userPassword"
            onChange={handleInputChange}
            value={formInputs.userPassword}
            required
            minLength={5}
            maxLength={20}
          />
        </div>

        <div className="userPasswordRepeatWrap">
          <label htmlFor="userPasswordRepeat">Repeat password: </label>
          <input
            type="password"
            id="userPasswordRepeat"
            name="userPasswordRepeat"
            onChange={handleInputChange}
            value={formInputs.userPasswordRepeat}
            required
          />
          <span className="formError">{formError}</span>
        </div>

        <div className="buttonSubmit">
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
};

export default FormNewUser;
