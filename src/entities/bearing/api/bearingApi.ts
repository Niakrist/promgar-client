import { baseApi } from '@/shared/store/api/baseApi';

export const bearingApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProduct: builder.query<any, string>({
      query: (url) => `/bearings/${url}`,
      transformResponse: (response: any) => response.product, // или просто response, зависит от ответа вашего бэка
    }),
    getCatalog: builder.query<any, string>({
      query: (path) => `/catalog/${path}`,
      // path может быть "sharikovye/radialnye?characteristics=..."
      transformResponse: (response: any) => response,
    }),
  }),
});

export const { useGetProductQuery, useGetCatalogQuery } = bearingApi;
