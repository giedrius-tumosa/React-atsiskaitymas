import HeaderInitial from "../header/HeaderInitial";
import FormUserLogin from "../forms/FormUserLogin";
import Heading from "../global/Heading";
import Footer from "../footer/Footer";

const LoginPage = () => {
  return (
    <>
      <HeaderInitial />
      <main>
        <Heading
          tag="h2"
          attributes={{ className: "formHeading" }}
          textContent="Login in to your account:"
        />
        <FormUserLogin />
      </main>
      <Footer />
    </>
  );
};

export default LoginPage;
