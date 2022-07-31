import { Link } from "react-router-dom";

import left from "../images/arrow-left-circle-fill.svg";
import right from "../images/arrow-right-circle-fill.svg";

const Arrows = () => {
  return (
    <div className="arrows">
      <Link to={`/address`}>
        <img src={left} alt="" className="left-arrow" />
      </Link>
      <Link to={`/summary`} className="link-right-arrow">
        <img src={right} alt="" className="right-arrow" />
      </Link>
    </div>
  );
};

export default Arrows;
