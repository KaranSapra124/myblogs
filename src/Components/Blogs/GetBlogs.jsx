import axios from "axios";
import React, { useEffect, useState } from "react";

const GetBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:3000/user/all-blogs", {
          withCredentials: true,
        });
        setBlogs(res?.data?.blogs);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {blogs?.map((elem) => (
        <div key={elem._id} className="mb-8 p-6 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h1 className="text-2xl font-bold mb-4">{elem.title}</h1>
          <img
            src={`http://localhost:3000/uploads/${elem.img}`}
            alt={elem.title}
            className="w-full h-auto mb-4 object-cover rounded"
          />
          <h3 className="text-lg mb-4 text-gray-700">{elem.description}</h3>
          <h4 className="text-md text-gray-500">Author: {elem.author.Name}</h4>
        </div>
      ))}
    </div>
  );
};

export default GetBlogs;
