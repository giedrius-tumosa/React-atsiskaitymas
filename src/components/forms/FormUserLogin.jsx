import { useState } from "react";

const FormUserLogin = () => {
  const [formInputs, setFormInputs] = useState({
    userEmail: "",
    userPassword: "",
  });

  const handleInputChange = (e) => {
    setFormInputs({ ...formInputs, [e.target.name]: e.target.value });
  };
  //TODO: validuoti ar egzistuoja useris duomenu bazeje

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formInputs); //TODO: delete
    setFormInputs({
      userEmail: "",
      userPassword: "",
    });
  };

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
            reuired
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
            reuired
            value={formInputs.userPassword}
          />
        </div>

        <div className="buttonSubmit">
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default FormUserLogin;
