import Header from "./Header";
import { Link } from "react-router-dom";
import "./Summary.css";

//images
import left from "../images/arrow-left-circle-fill.svg";
import right from "../images/arrow-right-circle-fill.svg";

const Summary = () => {
  return (
    <div>
      <Header />
      <main className="summary">
        <h1>Summary of your order</h1>
        <div className="itemsList">
          <h2>Your items</h2>
          <div className="items"></div>
        </div>

        <div className="arrows">
          <Link to={`/delivery-service`}>
            <img src={left} alt="" className="left-arrow" />
          </Link>
          <Link to={`/summary`} className="link-right-arrow">
            <button>Place order</button>
            {/* <img src={right} alt="" className="right-arrow" /> */}
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Summary;
