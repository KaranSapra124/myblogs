import axios from "axios";
import React, { useEffect, useState } from "react";

const AddBlogs = () => {
  const [formData, setFormData] = useState(null);
  const handleChangeInput = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]:
        e.target.name === "blogImg" ? e.target.files[0] : e.target.value,
    }));
  };

  const handleSubmit = async () => {
    try {
      const newFormData = new FormData();
      newFormData.append("blogImg", formData.blogImg);
      newFormData.append("blogTitle", formData.blogTitle);
      newFormData.append("blogDesc", formData.blogDesc);
      await axios.post(
        "http://localhost:3000/user/user-create-blog",
        newFormData,
        {
          withCredentials: true,
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Add Blog
        </h1>
        <input
          onChange={handleChangeInput}
          name="blogImg"
          type="file"
          className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 mb-4"
        />
        <input
          onChange={handleChangeInput}
          name="blogTitle"
          type="text"
          placeholder="Blog Title"
          className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          onChange={handleChangeInput}
          name="blogDesc"
          type="text"
          placeholder="Blog Description"
          className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleSubmit}
          className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default AddBlogs;
