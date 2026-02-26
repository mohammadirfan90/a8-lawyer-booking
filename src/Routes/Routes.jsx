import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import Home from "../pages/Home/Home";
import MyBookings from "../pages/MyBookings/MyBookings";
import Blogs from "../pages/Blogs/Blogs";
import ContactUs from "../pages/ContactUs/ContactUs";
import LawyerDetails from "../pages/LawyerDetails/LawyerDetails";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        loader: () => fetch("/lawyers.json"),
        path: "/",
        Component: Home,
      },
      {
        path: "/my-bookings",
        loader: () => fetch("/lawyers.json"),
        Component: MyBookings,
      },
      {
        path: "/blogs",
        Component: Blogs,
      },
      {
        path: "/contact-us",
        Component: ContactUs,
      },
      {
        path: "/lawyer-details/:id",
        loader: () => fetch("/lawyers.json"),
        Component: LawyerDetails,
      },
    ],
  },
]);
