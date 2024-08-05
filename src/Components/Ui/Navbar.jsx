import React from "react";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  const links = [
    {
      path: "/",
      linkName: "Home",
    },
    {
      path: "/allblogs",
      linkName: "All Blogs",
    },
    {
      path: "/about",
      linkName: "About",
    },
    {
      path: "/contact-us",
      linkName: "Contact Us",
    },
  ];

  return (
    <>
      <div>
        {links.map((elem) => {
          return <Link to={elem.path}>{elem.linkName}</Link>;
        })}
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
