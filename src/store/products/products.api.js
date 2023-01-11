import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productApi = createApi({
  reducerPath: 'api/products',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://631f7aec22cefb1edc4cdec0.mockapi.io/api/sneakers/'}),
  endpoints: build => ({
    getProducts: build.query({ 
      query: () => 'dishes'
    })
  })
});

export const { useGetProductsQuery } = productApi;