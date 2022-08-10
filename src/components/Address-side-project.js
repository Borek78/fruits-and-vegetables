import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const Address = (props) => {
  const address = useSelector((state) => state.delivery.deliveryAddress);
  console.log(address);

  const firstName = address.firstName;
  console.log(firstName);

  const firstNameObject = { firstName: firstName };
  const initialValue = { firstName: "Dalibor" };

  console.log(firstNameObject);
  console.log(initialValue);

  const [address1, setAddress1] = useState(firstNameObject);
  const [address2, setAddress2] = useState(initialValue);

  console.log(address1);
  console.log(address2);

  const changeHandler = () => {};

  return (
    <div className="address-container">
      <div className="address">
        <h2>Delivery Address</h2>

        <form className="form-address">
          <div className="form-item">
            <label>First Name</label>
            <input
              className="input-first-name"
              name="firstName"
              type="text"
              value={address.firstName}
              onChange={changeHandler}
            />
            <span className="error-message first-name-span"></span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Address;
