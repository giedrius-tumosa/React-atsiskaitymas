import HeaderInitial from "../header/HeaderInitial";
import FormNewUser from "../forms/FormNewUser";
import Heading from "../global/Heading";

const RegisterPage = () => {
  return (
    <>
      <HeaderInitial />
      <main>
        <Heading
          tag="h2"
          attributes={{ className: "formHeading" }}
          textContent="Register as a new user:"
        />
        <FormNewUser />
      </main>
    </>
  );
};

export default RegisterPage;
