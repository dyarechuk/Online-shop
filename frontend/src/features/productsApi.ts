import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => 'products',
      transformResponse: (response) => {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(response);
          }, 1500);
        });
      },
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;
