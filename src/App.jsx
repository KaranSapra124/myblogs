import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Ui/Navbar";
import Home from "./Components/Home/Home";
import SignUp from "./Components/Auth/SignUp";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./Components/Auth/Login";
import AddBlogs from "./Components/Blogs/AddBlogs";
import GetBlogs from "./Components/Blogs/GetBlogs";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/sign-up",
          element: <SignUp />,
        },
        {
          path: "/Log-in",
          element: <Login />,
        },
        {
          path: "/add-blog",
          element: <AddBlogs />,
        },
        {
          path: "/get-blogs",
          element: <GetBlogs />,
        },
      ],
    },
  ]);
  return (
    <>
      <ToastContainer></ToastContainer>
      <RouterProvider router={routes}></RouterProvider>
    </>
  );
}

export default App;
