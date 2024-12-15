export type TUser = {
  _id?: string;
  email: string;
  exp: number;
  iat: number;
  id: string;
  name: string;
  role: string;
};

export type TVendor = {
  name: string;
  email: string;
  contactNumber: string;
  address: string;
  shopName: string;
  shopDescription: string;
  passWord: string;
  role: "VENDOR";
};