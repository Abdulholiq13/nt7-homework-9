import { api } from "../api/index";
const searchApi = api.injectEndpoints({
  endpoints: (build) => ({
    searchRequest: build.query({
      query: (params) => ({
        url: `/cars/search`,
        params,
      }),
    }),
    getSingleCategory: build.query({
      query: (_id) => ({
        url: `/cars/${_id}`,
      }),
    }),
  }),
});
export const { useSearchRequestQuery, useGetSingleCategoryQuery } = searchApi;
