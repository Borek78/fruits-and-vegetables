import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
const api = axios.create({
  baseURL: "http://localhost:3006/",
});

function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const retrieveContacts = async function () {
      const response = await api.get("/contacts");
      console.log(response.data);
      setContacts(response.data);
    };

    retrieveContacts();
  }, []);

  // //functions
  // function deleteContactHandler(id) {
  //   const newContactList = contacts.filter((contact) => {
  //     return contact.id !== id;
  //   });

  //   setContacts(newContactList);
  // }

  // function addContactHandler(contact) {
  //   setContacts((prev) => {
  //     return [...prev, { id: uuidv4(), ...contact }];
  //   });
  // }

  //return
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/add" element={<AddContact />} />
        <Route path="/" element={<ContactList contacts={contacts} />} />
      </Routes>
    </Router>
  );
}

export default App;
