import React, { Suspense } from 'react';
import useAppRoutes from '@hooks/useAppRoutes';
import NavigationBar from '../layouts/navigationBar/NavigationBar';
import Spinner from '../components/element/Spinner';

const Content = () => {
  const elements = useAppRoutes();

  return (
    <>
      <div id="wrap">
        <NavigationBar />
        <Suspense fallback={<Spinner />}>{elements}</Suspense>
      </div>
    </>
  );
};

export default Content;
