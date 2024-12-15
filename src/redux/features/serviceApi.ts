import { baseApi } from "../api/baseApi";
import { tagTypes } from "../tagTypes";

const serviceApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllService: builder.query({
      query: (args: { name: string; value?: string | number }[]) => {
        const params = new URLSearchParams();
        if (args.length > 0) {
          args.forEach((item) => {
            params.append(`${item?.name}`, `${item?.value}`);
          });
        }
        return {
          url: "/services",
          method: "GET",
        };
      },
      providesTags: [tagTypes.service],
    }),

    getServiceById: builder.query({
      query: (id) => {
        return {
          url: `/services/${id}`,
          method: "GET",
        };
      },
      providesTags: [tagTypes.service],
    }),
    deleteServiceById: builder.mutation({
      query: (id) => {
        return {
          url: `/services/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: [tagTypes.service],
    }),
    
    addService: builder.mutation({
      query: (data) => {
        return {
          url: "services",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: [tagTypes.service],
    }),

    updateSerivce: builder.mutation({
      query: (data) => {
        const updateData = {
          name: data.name,
          description: data.description,
          duration: data.duration,
          price: data.price,
          images: data.images,
        };
        return {
          url: `/services/${data.id}`,
          method: "PUT",
          body: updateData,
        };
      },
      invalidatesTags: [tagTypes.service],
    }),
  }),
});

export const {
  useGetAllServiceQuery,
  useDeleteServiceByIdMutation,
  useGetServiceByIdQuery,
  useAddServiceMutation,
  useUpdateSerivceMutation,
} = serviceApi;
