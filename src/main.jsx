import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
// import App from "./App.jsx";
import ReactGA from "react-ga4";
import "./index.css";
import {
  HomePage,
  ErrorPage,
  AboutPage,
  ServicesPage,
  ContactPage,
  PortfolioPage,
} from "./pages";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

// Google Analytics

ReactGA.initialize("G-FY0BX8EQQQ");

ReactGA.send({ hitType: "pageview", page: "/", title: "Home Page" });
ReactGA.send({ hitType: "pageview", page: "/about", title: "About Page" });
ReactGA.send({ hitType: "pageview", page: "/services", title: "Service Page" });
ReactGA.send({
  hitType: "pageview",
  page: "/portfolio",
  title: "Portfolio Page",
});
ReactGA.send({ hitType: "pageview", page: "/contact", title: "Contact Page" });

// router
const router = createBrowserRouter([
  {
    element: (
      <>
        <Nav />
        <Outlet />
        <Footer />
      </>
    ),
    children: [
      {
        path: "/",
        element: <HomePage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/services",
        element: <ServicesPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/portfolio",
        element: <PortfolioPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
