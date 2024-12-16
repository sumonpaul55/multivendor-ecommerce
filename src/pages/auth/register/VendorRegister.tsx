/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Form, FormProps, Input, Upload } from "antd";
import { useNavigate } from "react-router";
import { UploadOutlined } from "@ant-design/icons";
import { toast } from "sonner";
import { useCreateUserMutation } from "../../../redux/features/userApi";
import { uploadImageToCloudinary } from "../../../Utiles/uploadImageToCloudinary";
type FieldType = {
  name: string;
  contactNumber?: string;
  address?: string;
  email: string;
  passWord: string;
  role: string;
  avatar?: any;
  shopName?: string;
  shopDescription?: string;
};

const VendorRegister = () => {
  const [registration] = useCreateUserMutation();
  const navigate = useNavigate();

  const normFile = (e: { file: File; fileList: FileList }) => {
    // if (Array.isArray(e)) {
    //   return e;
    // }
    return e?.file;
  };

  const onFinish: FormProps["onFinish"] = async (values) => {
    const toastId = toast.loading("Proccessing ....");
    const { avatar, ...data } = values;
    const image = avatar?.originFileObj;

    if (image) {
      const shoplogo = await uploadImageToCloudinary(image);
      console.log({ ...data, shoplogo: shoplogo });
      const result: any = await registration({ data, shoplogo: shoplogo });
      console.log(result)
      console.log(result);

      //   if (result.data.data.success) {
      //     toast.success(`${result?.message}`, {
      //       id: toastId,
      //       duration: 2000,
      //     });
      //     navigate(`/login`);
      //   }
    }
  };
  return (
    <div className="">
      <Form
        layout="vertical"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
          className="w-full md:w-[500px] px-5"
      >
        <div className="flex flex-col sm:flex-row md:gap-5 md:mt-5">
          <Form.Item<FieldType>
            label="Name"
            name="name"
            className="w-full"
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <Input
              className="
            "
            />
          </Form.Item>

          <Form.Item<FieldType>
            label="Email"
            name="email"
            className="w-full"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input type="email" />
          </Form.Item>
        </div>

        <div className="flex flex-col sm:flex-row md:gap-5 md:mt-5">
          <Form.Item<FieldType>
            label="Contact Number"
            name="contactNumber"
            className="w-full"
          >
            <Input />
          </Form.Item>
          <Form.Item<FieldType>
            label="Address"
            name="shopName"
            className="w-full"
          >
            <Input placeholder="Shop Name..." />
          </Form.Item>
        </div>
        <div className="flex flex-col sm:flex-row md:md:gap-5 md:mt-5">
          <Form.Item<FieldType>
            label="Address"
            name="address"
            className="w-full"
          >
            <Input.TextArea showCount maxLength={100} />
          </Form.Item>
          <Form.Item<FieldType>
            label="shop Description"
            name="shopDescription"
            className="w-full"
          >
            <Input.TextArea showCount maxLength={100} />
          </Form.Item>
        </div>

        <div className="flex flex-col sm:flex-row gap-5 mt-5">
          <Form.Item<FieldType>
            label="Password"
            name="passWord"
            className="w-full"
            rules={[
              { required: true, message: "Please input your password!" },
              { min: 6, message: "Min Pass lanth 6" },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            className="w-full"
            name="avatar"
            label="User Avatar"
            valuePropName="file"
            getValueFromEvent={normFile}
          >
            <Upload name="avatar" listType="picture">
              <Button icon={<UploadOutlined />}>Click to upload</Button>
            </Upload>
          </Form.Item>
        </div>

        <Form.Item label={null} className="text-center mt-5">
          <Button type="primary" htmlType="submit" className="w-40">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default VendorRegister;
