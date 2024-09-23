import { api } from "./index";
const carschApi = api.injectEndpoints({
  endpoints: (build) => ({
    getCarsByQuery: build.query({
      query: () => ({
        url: `/cars`,
      }),
    }),
    categores: build.query({
      query: (params) => ({
        url: `/categories`,
      }),
    }),
  }),
});
export const { useGetCarsByQueryQuery, useCategoresQuery } = carschApi;
