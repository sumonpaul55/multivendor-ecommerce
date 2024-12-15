/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button, Checkbox, Form, FormProps, Input } from "antd";
import { Link, useNavigate } from "react-router";
import { useLogInMutation } from "../../redux/features/authAPi";
import { useAppDispatch } from "../../redux/hooks";
import { toast } from "sonner";
import { verifyToken } from "../../Utiles/verifyToken";
import { TUser } from "../../types/UserType";
import { setUser } from "../../redux/features/authSlice";

type FieldType = {
  email?: string;
  passWord?: string;
  remember?: string;
};

export default function Login() {
  const Navigate = useNavigate();
  const [logIn] = useLogInMutation();
  const dispatch = useAppDispatch();

  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    const toastId = toast.loading("Loging.....");
    try {
      const userInfo = {
        email: values.email,
        passWord: values.passWord,
      };
      
      const response = await logIn(userInfo).unwrap();
      
      const user = verifyToken(response?.data?.accessToken) as TUser;

      dispatch(setUser({ user: user, token: response.token }));
      toast.success("Logged in successfuly", { id: toastId, duration: 2000 });
      Navigate(`/home`);
    } catch (error) {
      toast.error("Somthing went wrong", { id: toastId, duration: 2000 });
    }

  };

  return (
    <div className="flex justify-center items-center h-[calc(100vh-100px)] ">
      <div className="border p-10 shadow-2xl">
      <p className="text-center mb-10 text-2xl font-bold uppercase">Login</p>
      <Form
        layout="vertical"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
        className="w-full md:w-[500px] px-5"
      >
        <Form.Item<FieldType>
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please input your username!" } ]}
        >
          <Input type="email"/>
        </Form.Item>

        <Form.Item<FieldType>
          label="Password"
          name="passWord"
          rules={[{ required: true, message: "Please input your password!" }, {min:6, message: "Min Pass lanth 6"}]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item<FieldType>
          name="remember"
          valuePropName="checked"
          label={null}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item label={null} className="text-center">
          <Button type="primary" htmlType="submit" className="w-40">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <p className="text-center">Not a member? <Link to='/register'><span className="text-blue-600">Register Now!</span></Link></p>
      </div>
    </div>
  );
}
