/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form, Select } from "antd";
import { useState } from "react";
import { Link } from "react-router";
import VendorRegister from "./register/VendorRegister";
import CustomerRegister from "./register/CustomerRegister";

export default function Register() {
  const [type, setType] = useState("COSTOMER");

  return (
    <div className="flex justify-center items-center my-3">
      <div className="border shadow-xl p-4">
        <p className="text-2xl text-center my-2 font-bold">Registration Form</p>
        <Form>
          <Form.Item
            label="Register as a"
            name="role"
            className="w-full mb-16"
            layout="vertical"
          >
            <Select
              onChange={(value) => setType(value)}
              showSearch
              style={{ width: "100%" }}
              placeholder="Search to Select"
              optionFilterProp="label"
              filterSort={(optionA, optionB) =>
                (optionA?.label ?? "")
                  .toLowerCase()
                  .localeCompare((optionB?.label ?? "").toLowerCase())
              }
              options={[
                {
                  value: "VENDOR",
                  label: "VENDOR",
                },
                {
                  value: "COSTOMER",
                  label: "COSTOMER",
                },
              ]}
            />
          </Form.Item>
        </Form>
        <div>
          {type === "VENDOR" ? (
            <div>
              <VendorRegister />
            </div>
          ) : (
            <div className="">
              <CustomerRegister />
            </div>
          )}
        </div>

        <p className="text-center">
          Already Registred?
          <Link to="/login">
            <span className="text-blue-600">Please Login!</span>
          </Link>
        </p>
      </div>
    </div>
  );
}
