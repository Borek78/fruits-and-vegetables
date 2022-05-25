import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import ErrorPage from "./ErrorPage";
import ContactDetail from "./ContactDetail";
import DeletePage from "./DeletePage";
import EditContact from "./EditContact";
import "bootstrap/dist/css/bootstrap.min.css";
import "../app.css";
import "../app-responsive.css";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const api = axios.create({
  baseURL: "http://localhost:3006/",
});

// const api = axios.create({
//   baseURL:
//     "https://my-json-server.typicode.com/Borek78/json-server-for-contact-manager/",
// });

function App() {
  const [contacts, setContacts] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);

  //RETRIEVING DATA
  useEffect(() => {
    const retrieveContacts = async function () {
      const response = await api.get("/contacts");
      console.log(response.data);
      setContacts(response.data);
      console.log(contacts);
    };
    retrieveContacts();
  }, []);

  //DELETE
  async function deleteContactHandler(id) {
    await api.delete(`/contacts/${id}`);
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  }

  //ADD
  const addContactHandler = async function (contact) {
    const newContact = { id: uuidv4(), ...contact };

    await api.post("/contacts", newContact);

    setContacts([...contacts, newContact]);
  };

  //UPDATE
  const updateContactHandler = async function (updatedContact) {
    const { id } = updatedContact;
    await api.put(`/contacts/${id}`, updatedContact);

    const newContacts = contacts.map((contact) => {
      return contact.id === id ? updatedContact : contact;
    });

    setContacts(newContacts);
  };

  console.log(contacts);
  //SEARCH

  function searchHandler(a) {
    console.log("Search Term is: " + a);
    setSearchTerm(a);
    if (a !== "") {
      const newContactList = contacts.filter((contact) => {
        return [contact.name + contact.email]
          .join()
          .toLowerCase()
          .includes(a.toLowerCase());
      });
      setSearchResults(newContactList);
      console.log(searchResults);
    } else {
      setSearchResults(contacts);
    }
  }

  //return
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route
            path="/add"
            element={<AddContact addContactHandler={addContactHandler} />}
          />
          <Route
            path="/"
            element={
              <ContactList
                contacts={searchTerm.length < 1 ? contacts : searchResults}
                searchHandler={searchHandler}
              />
            }
          />
          <Route path="/contact/:id" element={<ContactDetail />} />
          <Route
            path="/delete/:id"
            element={<DeletePage deleteContactHandler={deleteContactHandler} />}
          />

          <Route
            path="/edit/:id"
            element={
              <EditContact updateContactHandler={updateContactHandler} />
            }
          />

          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <footer></footer>
      </Router>
    </>
  );
}

export default App;
