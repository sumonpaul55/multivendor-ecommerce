import { baseApi } from "../api/baseApi";
import { tagTypes } from "../tagTypes";


const userApi= baseApi.injectEndpoints({
    endpoints:(builder)=> ({
        createUser: builder.mutation({
            query:(data)=> {
                
                return {
                    url:"/user",
                    method: "POST",
                    body: data
                }
            },
            invalidatesTags:[tagTypes.user]
        }),
        getAllUser: builder.query({
            query:()=> {

                return {
                    url:"/user",
                    method: "GET"
                }
            },
            providesTags:[tagTypes.user]
        }),

        deleteUserById: builder.mutation({
            query: (id) => {
              return {
                url: `/users/${id}`,
                method: "DELETE",
              };
            },
            invalidatesTags: [tagTypes.user],
          }),

          changeUserRoal:builder.mutation({
            query:(data)=> {
                
                const {id, role} = data;
                return {
                    url: `/users/${id}`,
                    method: "PUT",
                    body: {role}
                }
            },
            invalidatesTags: [tagTypes.user],
          }),
    }),
    
})


export const {
    useCreateUserMutation,
    useGetAllUserQuery,
    useDeleteUserByIdMutation,
    useChangeUserRoalMutation
} = userApi;