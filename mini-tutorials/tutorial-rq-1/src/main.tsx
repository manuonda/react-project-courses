import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'
import {ReactQueryDevtools} from 'react-query/devtools';
import { BrowserRouter,Routes, Route } from 'react-router-dom';

import App from './App'
import './index.css'
import Users from './Users';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <App />
    <ReactQueryDevtools></ReactQueryDevtools>
    </QueryClientProvider>
   
  </React.StrictMode>
)
