import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const quizApi = createApi({
  reducerPath: 'quizApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://opentdb.com',
  }),
  endpoints: (builder) => ({
    getQuizQuestions: builder.query({
      query: ({ amount = 10, difficulty = 'easy' }) => {
        let url = `api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
        return url;
      },
    }),
  }),
  keepUnusedDataFor: 5,
  refetchOnMountOrArgChange: true,
});

export const { useGetQuizQuestionsQuery } = quizApi;
