import { useEffect } from "react";
import { createContext, useState } from "react";

const ENDPOINT_USERS = "http://localhost:5000/users";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [userFetchErrors, setUserFetchErrors] = useState({
    getError: "",
    postError: "",
  });
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  const getUsers = async () => {
    try {
      const response = await fetch(ENDPOINT_USERS);
      if (!response.ok) throw Error("User data could not be retrieved from the server. Try later.");
      const userData = await response.json();
      setUsers(userData);
      setUserFetchErrors({ ...userFetchErrors, getError: "" });
    } catch (error) {
      setUserFetchErrors({ ...userFetchErrors, getError: error.message });
    }
  };

  const addNewUser = async (newUser) => {
    try {
      setUsers([...users, newUser]);
      const response = await fetch(ENDPOINT_USERS, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });
      if (!response.ok) throw Error("Error: could not upload a new user to the server. Try later");
      setUserFetchErrors({ ...userFetchErrors, postError: "" });
    } catch (error) {
      setUserFetchErrors({ ...userFetchErrors, postError: error.message });
      setUsers([...users]);
    }
  };

  return (
    <UserContext.Provider
      value={{
        users,
        userFetchErrors,
        getUsers,
        addNewUser,
        setUserFetchErrors,
        userLoggedIn,
        setUserLoggedIn,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider };
export default UserContext;
