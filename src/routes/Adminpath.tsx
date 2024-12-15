import Category from "../pages/dashboard/User/Category";
import Customer from "../pages/dashboard/User/Customer";
import User from "../pages/dashboard/User/User";
import Vendor from "../pages/dashboard/User/Vendor";

export const adminPath = [
  { name: "Manages Admin", path: "admin", element: <Vendor /> },
  { name: "Manage Category", path: "mangetcategory", element: <Category /> },
  { name: "Manages Users", path: "users", element: <User /> },
  { name: "Manages Customer", path: "customer", element: <Customer /> },
  { name: "Manages Vendor", path: "vendor", element: <Vendor /> },
];
