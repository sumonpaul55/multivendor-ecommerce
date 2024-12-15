import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { useAppSelector } from "../../redux/hooks";
import { currentUser } from "../../redux/features/authSlice";
import { sidebarItemsGenerator } from "../../Utiles/sitebarItemGenerator";
import { adminPath } from "../../routes/Adminpath";
import { vendorPath } from "../../routes/VendorPath";
import { customerPath } from "../../routes/CustomerPaht";

export default function DashboardSitebar() {
  const userRole = {
    ADMIN: "admin",
    VENDOR: "vendor",
    CUSTOMER: "customer",
  };

  const user = useAppSelector(currentUser);

  let sidebarItems;

  switch (user?.role) {
    case userRole.ADMIN:
      sidebarItems = sidebarItemsGenerator(adminPath);
      break;

    case userRole.VENDOR:
      sidebarItems = sidebarItemsGenerator(vendorPath);
      break;
    
      case userRole.CUSTOMER:
      sidebarItems = sidebarItemsGenerator(customerPath);
      break;

    default:
      break;
  }

  return (
    <div>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        style={{ height: "100vh", position: "sticky", top: "0", left: "0" }}
      >
        <div
          style={{
            color: "white",
            textAlign: "center",
            height: "4rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>{user?.name}</h1>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={sidebarItems}
        />
      </Sider>
    </div>
  );
}
