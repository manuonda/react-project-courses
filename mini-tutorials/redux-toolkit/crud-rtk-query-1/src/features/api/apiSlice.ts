import { createApi, fetchBaseQuery}  from "@reduxjs/toolkit/query/react";
import { ITodo } from "../../type";

export const apiSlice = createApi({
   reducerPath: 'api',
   baseQuery: fetchBaseQuery({baseUrl : 'http://localhost:3004'}),
   tagTypes:['Todos'],
   endpoints: (builder) => ({
         getTodos : builder.query<ITodo[], void>({
             query: () => '/todos',
             //transformResponse: (res:ITodo[]) => res.sort((a,b) => b.id - a.id)
             providesTags:['Todos']
         }),
         addTodo : builder.mutation({
             query:(todo:ITodo) => ({
                 url:'/todos',
                 method: 'POST',
                 body: todo
             }),
             invalidatesTags:['Todos']
         }),
         updateTodo : builder.mutation({
            query: (todo:ITodo) => ({
                 url:`/todos/${todo.id}`,
                 method:'PATCH',
                 body: todo  
             }),
             invalidatesTags:['Todos']
         }),
         deleteTodo: builder.mutation({
             query:(id:any) => ({
                 url:`/todos/${id}`,
                 method:'DELETE',
                 body:id
             }),
             invalidatesTags:['Todos']

         })
   })
});

export const {
    useGetTodosQuery,
    useAddTodoMutation,
    useUpdateTodoMutation,
    useDeleteTodoMutation
} = apiSlice;


