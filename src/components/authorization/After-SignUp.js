import "./After-SignUp.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const AfterSignUp = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.signUp);

  const name = user.name;
  const password = user.password;

  console.log(user);

  const backToLogin = () => {
    navigate("/");
  };

  return (
    <div className="after-sign-up-page">
      <div className="congratulations">
        <div className="">Congratulations!</div>
        <div>You have signed up successfully.</div>
      </div>
      <div>
        Your id name is: <span className="chocolate">{name}</span>
      </div>
      <div>
        Your password is: <span className="chocolate">{password}</span>
      </div>
      <button className="back-to-login-btn" onClick={backToLogin}>
        Back to Login Page
      </button>
    </div>
  );
};

export default AfterSignUp;
