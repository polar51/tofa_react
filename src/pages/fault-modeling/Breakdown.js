import React from 'react';
import { useFaultModelingTrendGet } from '@hooks/api/fault-modeling-hook';
import BreakdownCharts from './BreakdownCharts';
import EmptyCharts from './EmptyCharts';

const Breakdown = ({ id }) => {
  const { data = [] } = useFaultModelingTrendGet(id);

  return (
    <>{data.length > 0 ? <BreakdownCharts data={data} /> : <EmptyCharts />}</>
  );
};

export default Breakdown;
