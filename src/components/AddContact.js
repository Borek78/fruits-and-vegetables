import React, { useState } from "react";

function AddContact(props) {
  const [contact, setContact] = useState({ name: "", email: "" });

  function add(e) {
    e.preventDefault();

    if (contact.name === "" || contact.email === "") {
      alert("All the field are MANDATORY");
    }

    props.addContactHandler(contact);
  }

  return (
    <div className="addcontact">
      <h4>Add Contact</h4>
      <br />
      <form onSubmit={add}>
        <div className="name-and-email">
          <div className="name-in-contact-card">
            <label className="label" htmlFor="">
              Name
            </label>
            <input
              className="input"
              placeholder="Name"
              type="text"
              onChange={(e) => {
                setContact({ name: e.target.value, email: contact.email });
              }}
            />
          </div>

          <div className="name-in-contact-card">
            <label className="label" htmlFor="">
              Email
            </label>
            <input
              className="input"
              placeholder="Email"
              type="text"
              onChange={(e) => {
                setContact({
                  name: contact.name,
                  email: e.target.value,
                });
              }}
            />
          </div>
        </div>
        <br />

        <button className="btn btn-primary">Add</button>
      </form>
    </div>
  );
}

export default AddContact;
