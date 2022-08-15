import "./usestate.css";
import React, { useState } from "react";

function App() {
  const [user, setUser] = useState({});

  return (
    <div>
      <h2>User</h2>
      <span>username is: {user.name}</span>
    </div>
  );
}

export default App;
