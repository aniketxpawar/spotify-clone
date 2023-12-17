import axios from "axios";
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const options = {
  method: 'GET',
  url: 'https://shazam-api6.p.rapidapi.com/shazam/top_tracks_country',
  headers: {
    'X-RapidAPI-Key': '1dbfc08cf3msh0dc5eb7349bdf70p1cb960jsn83d2c093a2d1',
    'X-RapidAPI-Host': 'shazam-api6.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});

export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
      baseUrl: 'https://shazam-api6.p.rapidapi.com/shazam',
      prepareHeaders: (headers) => {
        headers.set('X-RapidAPI-Key','1dbfc08cf3msh0dc5eb7349bdf70p1cb960jsn83d2c093a2d1')
      return headers;
      }
    }),
    endpoints: (builder) => ({
      getTopCharts: builder.query({query: () => '/top_tracks_country'})
    })
});

export const {
  useGetTopChartsQuery
} = shazamCoreApi