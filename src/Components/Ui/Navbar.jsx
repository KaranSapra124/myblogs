import React from "react";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  const links = [
    {
      path: "/",
      linkName: "Home",
    },
    {
      path: "/about",
      linkName: "About",
    },
    {
      path: "/contact-us",
      linkName: "Contact Us",
    },
    {
      path: "/sign-up",
      linkName: "Sign Up",
    },
    {
      path: "/Log-in",
      linkName: "Log In",
    },
    {
      path: "/add-blog",
      linkName: "Add Blog",
    },
    {
      path: "/get-blogs",
      linkName: "Get Blogs",
    },
  ];

  return (
    <>
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-evenly">
          {links.map((elem, index) => (
            <Link
              key={index}
              to={elem.path}
              className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              {elem.linkName}
            </Link>
          ))}
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
