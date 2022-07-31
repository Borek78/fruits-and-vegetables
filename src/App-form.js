import "./App-form.css";
import { useState } from "react";

function App() {
  const [address, setAddress] = useState({
    firstName: "",
    secondName: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setAddress({ ...address, [name]: value });
  }

  return (
    <div className="container">
      <div className="field">
        <label>First Name</label>
        <input
          className="input-form"
          name="firstName"
          type="text"
          onChange={handleChange}
          value={address.firstName}
        />
      </div>
      <div className="field">
        <label>Second Name</label>
        <input
          className="input-form"
          name="secondName"
          type="text"
          onChange={handleChange}
          value={address.secondName}
        />
      </div>
    </div>
  );
}

export default App;
