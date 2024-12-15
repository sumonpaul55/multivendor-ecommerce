import { tagTypes } from "../tagTypes";
import { baseApi } from "../api/baseApi";

const slotsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllSlots: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args.serviceId) {
          params.append("serviceId", args.serviceId);
        }
        if (args.date) {
          params.append("date", args.date);
        }

        return {
          url: "/slots",
          method: "GET",
          params: params,
        };
      },
      providesTags: [tagTypes.slot],
    }),

    crateSlots: builder.mutation({
      query: (data) => {
        return {
          url: "/services/slots",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: [tagTypes.slot],
    }),

    deleteSloteById: builder.mutation({
      query: (id) => {
        
        return {
          url: `/slots/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: [tagTypes.slot],
    }),

    getSlotsDateById: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args.serviceId) {
          params.append("serviceId", args.serviceId);
        }
      return {
          url: "/slots/lots-by-date",
          method: "GET",
          params: params,
        };
      },
      providesTags: [tagTypes.slot],
    }),
  }),
});

export const {
  useGetAllSlotsQuery,
  useCrateSlotsMutation,
  useDeleteSloteByIdMutation,
  useGetSlotsDateByIdQuery
} = slotsApi;
