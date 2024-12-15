import { createBrowserRouter } from "react-router";
import RootLayout from "../component/Layout/RootLayout";
import { App } from "antd";
import DashLayout from "../component/Layout/DashLayout";
import { routerGenerator } from "../Utiles/routerGenerator";
import { adminPath } from "./Adminpath";
import { customerPath } from "./CustomerPaht";
import { vendorPath } from "./VendorPath";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Contact from "../pages/page/Contact";
import About from "../pages/page/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <App /> },
      { path: "home", element: <App /> },
      // { path: "booking", element: <Booking /> },
      // { path: "payment", element: <PaymentPage /> },
      { path: "aboutus", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      {
        path: "dashboard",
        element: <DashLayout />,
        children: routerGenerator(adminPath),
      },
      {
        path: "dashboard",
        element: <DashLayout />,
        children: routerGenerator(customerPath),
      },
      {
        path: "dashboard",
        element: <DashLayout />,
        children: routerGenerator(vendorPath),
      },
    ],
  },
]);

export default router;
