import React, { lazy, Suspense } from 'react';
import './App.css';
import './default.css';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { BrowserRouter } from 'react-router-dom';
import NavigationBar from './layouts/navigationBar/NavigationBar';
import Spinner from './components/element/Spinner';

const FaultModeling = lazy(() => {
  return import('./pages/fault-modeling/FaultModeling');
});

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      retry: 0,
      suspense: true,
      useErrorBoundary: true,
    },
    mutations: {
      useErrorBoundary: true,
    },
  },
});

const App = () => {
  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <QueryClientProvider client={queryClient}>
          <div id="wrap">
            <NavigationBar />
            <Suspense fallback={<Spinner />}>
              <FaultModeling />
            </Suspense>
          </div>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
