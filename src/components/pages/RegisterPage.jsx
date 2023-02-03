import HeaderInitial from "../header/HeaderInitial";
import FormNewUser from "../forms/FormNewUser";
import Heading from "../global/Heading";
import Footer from "../footer/Footer";

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
      <Footer />
    </>
  );
};

export default RegisterPage;
