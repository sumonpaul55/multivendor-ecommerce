/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Form, FormProps, Input } from "antd";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import { useCreateUserMutation } from "../../../redux/features/userApi";

type CustomerFieldType = {
  name: string;
  email: string;
  contactNumber?: string;
  address?: string;
  passWord: string;
  role: "CUSTOMER";
};

const CustomerRegister = () => {
  const [registration] = useCreateUserMutation();
  const navigate = useNavigate();

  const onFinish: FormProps["onFinish"] = async (values) => {
    const data = { ...values, role: "CUSTOMER" }; // Explicitly set role as CUSTOMER
    const toastId = toast.loading("Creating ....");

    try {
      const result: any = await registration(data);
      if (result.data.data.success) {
        toast.success(`${result?.message}`, {
          id: toastId,
          duration: 2000,
        });
        navigate(`/login`);
      }
    } catch (error: any) {
      toast.error(`${error?.message}`, {
        id: toastId,
        duration: 2000,
      });
    }
  };

  return (
    <div>
      <Form
        layout="vertical"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
        className="w-full md:w-[500px] px-5"
      >
        {/* Name Field */}
        <Form.Item<CustomerFieldType>
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please input your name!" }]}
        >
          <Input />
        </Form.Item>

        {/* Email Field */}
        <Form.Item<CustomerFieldType>
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input type="email" />
        </Form.Item>

        {/* Contact Number Field */}
        <Form.Item<CustomerFieldType>
          label="Contact Number"
          name="contactNumber"
        >
          <Input />
        </Form.Item>

        {/* Address Field */}
        <Form.Item<CustomerFieldType> label="Address" name="address">
          <Input.TextArea showCount maxLength={100} />
        </Form.Item>

        {/* Password Field */}
        <Form.Item<CustomerFieldType>
          label="Password"
          name="passWord"
          rules={[
            { required: true, message: "Please input your password!" },
            { min: 6, message: "Password must be at least 6 characters!" },
          ]}
        >
          <Input.Password />
        </Form.Item>

        {/* Submit Button */}
        <Form.Item label={null} className="text-center">
          <Button type="primary" htmlType="submit" className="w-40">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CustomerRegister;
