import { TVendor } from "../../types/authtypes";
import { baseApi } from "./../api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    logIn: builder.mutation({
      query: (data) => {
        return {
          url: "/auth/login",
          method: "POST",
          body: data,
        };
      },
    }),
    vendorRegistration: builder.mutation({
      query: (info:TVendor) =>{
        return {
          url: "/user/create-vendor",
          method: "POST",
          body: info
        }
      }
    })


  }),
});

export const { useLogInMutation } = authApi;
