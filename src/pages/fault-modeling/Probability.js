import React from 'react';
import { useFrequencyGet } from '@hooks/api/fault-modeling-hook';
import EmptyCharts from './EmptyCharts';
import ProbabilityCharts from './ProbabilityCharts';

const Probability = ({ id }) => {
  const { data = [] } = useFrequencyGet(id);
  return (
    <>{data.length > 0 ? <ProbabilityCharts data={data} /> : <EmptyCharts />}</>
  );
};

export default Probability;
