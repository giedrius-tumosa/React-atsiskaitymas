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
        <div className="heroHeadingWrap">
          <Heading tag="h1" textContent="Saw a discount? Let everyone else know!" />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default RegisterPage;
