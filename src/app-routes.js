import React, { lazy } from 'react';

const FaultModeling = lazy(() => {
  return import('@pages/fault-modeling/FaultModeling');
});

const routes = [
  {
    path: '/',
    element: <FaultModeling />,
  },
];

export default routes;
