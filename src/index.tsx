import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './app/store';
import GlobaStyle from 'Global/GlobalStyle/GlobaStyle';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);



const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,


      // * 60 * 60 * 1, // 1 hours
      ///vi du như khi sang 1 page khác khoảng 1h thì những key cua trang truoc se tụ giai phóng sau 1h
    },
  },
})

root.render(


  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <GlobaStyle>
          <Provider store={store}>
            <App />
            <ReactQueryDevtools initialIsOpen={false} />
          </Provider>
        </GlobaStyle>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
