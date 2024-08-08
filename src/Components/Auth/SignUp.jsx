import React, { useState } from "react";
import axios from "axios";

const SignUp = () => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [phnNum, setPhnum] = useState("");

  const handleSubmit = async () => {
    const newObj = {
      Name: Name,
      Email: Email,
      phnNum: phnNum,
    };
    // Install library named AXIOS , command -> npm i axios
    await axios.post("http://localhost:3000/user/user-sign-up", newObj);
  };
  return (
    <div>
      <input
        type="text"
        name=""
        id=""
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        type="email"
        name=""
        id=""
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        type="number"
        name=""
        id=""
        onChange={(e) => {
          setPhnum(e.target.value);
        }}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default SignUp;
