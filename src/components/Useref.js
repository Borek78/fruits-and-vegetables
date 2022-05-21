import React, { useState, useRef } from "react";

function Useref() {
  const [name, setName] = useState("");

  const inputV = useRef("f");
  console.log(name);
  console.log(inputV);

  return (
    <>
      <input
        //ref={inputV}
        type="text"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <div> My name is {inputV.current.value}</div>
      <div> My name is {name}</div>
    </>
  );
}

export default Useref;
