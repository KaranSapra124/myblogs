import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [phnNum, setPhnum] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    const newObj = {
      Name: Name,
      Email: Email,
      password: password,
      phnNum: phnNum,
    };

    try {
      let res = await axios.post(
        "http://localhost:3000/user/user-sign-up",
        newObj
      );
      toast.success(res?.data?.message);
    } catch (error) {
      toast.error("Sign-up failed. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <ToastContainer />
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Sign Up</h2>
        <div className="flex max-[400px]:flex-wrap">
          <input
            type="text"
            placeholder="Name"
            className="max-[400px]:ml-0 ml-2 w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            className="max-[400px]:ml-0 ml-2 w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <input
          type="password"
          placeholder="Password"
          className="max-[400px]:ml-0 ml-2 w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="number"
          placeholder="Phone Number"
          className="w-full p-2 mb-6 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setPhnum(e.target.value)}
        />
        <button
          onClick={handleSubmit}
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default SignUp;
