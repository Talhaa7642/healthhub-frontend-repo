import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://restcountries.com/v3.1' }),
  refetchOnFocus: true,
  refetchOnReconnect: true,
  endpoints: (builder) => ({
    getCountries: builder.query({
      query: () => '/all',
    }),
    createAppointment: builder.mutation({
      query: (appointment) => ({
        url: `${process.env.REACT_APP_BACKEND_URL}/appointments`,
        method: 'POST',
        body: appointment,
      }),
    }),
  }),
});

export const { useGetCountriesQuery, useCreateAppointmentMutation } = api;
