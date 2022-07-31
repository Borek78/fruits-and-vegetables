import Header from "./Header";
import { Link } from "react-router-dom";
import "./Summary.css";

//images
import left from "../images/arrow-left-circle-fill.svg";
import right from "../images/arrow-right-circle-fill.svg";

const Summary = () => {
  return (
    <div className="summary">
      <Header />
      <h1>Summary</h1>
      <div className="arrows">
        <Link to={`/delivery-service`}>
          <img src={left} alt="" className="left-arrow" />
        </Link>
        <Link to={`/summary`} className="link-right-arrow">
          <img src={right} alt="" className="right-arrow" />
        </Link>
      </div>
    </div>
  );
};

export default Summary;
