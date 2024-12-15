import { Button, Dropdown, Layout, Menu, MenuProps } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";

import { NavLink, Outlet } from "react-router";
import Drower from "../UI/Drower";
import { useAppDispatch } from "../../redux/hooks";
import { logOut } from "../../redux/features/authSlice";

export const nevItems = [
  {
    key: "Home",
    label: (
      <NavLink
        to={"/home"}
        className={({ isActive }) => (isActive ? "" : "text-black")}
      >
        Home
      </NavLink>
    ),
  },
  // {
  //   key: "Service",
  //   label: <NavLink to={"/service"}>Prduct</NavLink>,
  // },

  {
    key: "AboutUs",
    label: (
      <NavLink
        to={"/about"}
        className={({ isActive }) =>
          isActive ? "text-red-500 rotate-12" : "text-black"
        }
      >
        About Us
      </NavLink>
    ),
  },
  {
    key: "contact",
    label: (
      <NavLink
        to={"/contact"}
        className={({ isActive }) =>
          isActive ? "text-red-500 rotate-12" : "text-black"
        }
      >
        Contact Us
      </NavLink>
    ),
  },
];

export default function RootLayout() {
  const user = "";
  const dispatch = useAppDispatch();

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: <NavLink to={`/dashboard`}>Dashboard</NavLink>,
    },
    {
      key: "2",
      label: (
        <Button
          type="link"
          onClick={() => dispatch(logOut())}
        >
          Log Out
        </Button>
      ),
    },
  ];
  return (
    <Layout className="">
      <Header className="flex justify-between w-full items-center">
        <NavLink
          to="/"
          style={{
            color: "white",
            padding: "5px 30px",
            fontSize: "25px",
          }}
          className="flex items-center gap-1"
        >
          {/* <img src={logo} alt="Logo" width={90} /> */}
          <h2 className="text-lg md:text-2xl lg:text-3xl font-bold">SCWS</h2>
        </NavLink>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={nevItems}
          style={{ padding: "5px" }}
          className="hidden md:flex md:flex-1 justify-center text-xl mymenu"
        />
        <div className="flex flex-row gap-5 justify-center items-center">
          <div className="mt-4 cursor-pointer md:hidden">
            <Drower />
          </div>
          <div className="flex items-center gap-5">
            <div>
              <NavLink to="/booking">
                <div className="bg-red-500 text-white flex justify-center items-center rounded-full h-6">
                  {/* {state.length} */}
                </div>
                {/* <ShoppingCart className="text-white font-bold" /> */}
              </NavLink>
            </div>
            <div className="flex flex-col text-white">
              
              {user ? (
                <Dropdown
                  menu={{ items }}
                  placement="bottomRight"
                  arrow={{ pointAtCenter: true }}
                >
                  <Button className="rounded-full h-10 w-10">
                    <div>{/* <UserOutlined className="w-full" /> */}</div>
                  </Button>
                </Dropdown>
              ) : (
                <NavLink to={"/login"}>Login</NavLink>
              )}
            </div>
          </div>
        </div>
      </Header>
      <Layout>
        <Layout>
          {/* <ScrollToTop /> */}
          <Content className=" container mx-auto min-h-[calc(100vh-101px)]">
            <Outlet />
          </Content>
        </Layout>
        <Footer
          style={{
            textAlign: "center",
            backgroundColor: "black",
            color: "white",
            fontSize: "13px",
          }}
        ></Footer>
      </Layout>
      {/* <Gotop /> */}
    </Layout>
  );
}
