import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_APP_URL,
})

const api = createApi({
  reducerPath: 'api',
  baseQuery,
  endpoints: (builder) => ({}),
})

export default api
