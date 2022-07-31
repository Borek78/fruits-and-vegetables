import SignUp from "./SignUp";
import Login from "./Login";
import AfterSignUp from "./After-SignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Auth = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/after-sign-up" element={<AfterSignUp />} />
        </Routes>
      </Router>
    </>
  );
};

export default Auth;
