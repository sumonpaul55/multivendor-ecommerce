import { Button, Drawer, Menu, Space } from "antd";

import { useState } from "react";
import { nevItems } from "../Layout/RootLayout";

import { AlignRightIcon } from "lucide-react";

export default function Drower() {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Space>
        <AlignRightIcon
          onClick={showDrawer}
          className="text-white text-2xl font-bold"
        />
      </Space>
      <Drawer
        title="CWMS"
        placement={"left"}
        width={400}
        onClose={onClose}
        open={open}
        style={{ background: "#000", color: "white" }}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button type="primary" onClick={onClose}>
              OK
            </Button>
          </Space>
        }
      >
        <Menu
          theme="dark"
          mode="vertical"
          defaultSelectedKeys={["2"]}
          items={nevItems}
          className="flex flex-col justify-center text-xl bg-black"
        />
      </Drawer>
    </div>
  );
}
