import React from 'react';
import { useFrequencyGet } from '@hooks/api/fault-modeling-hook';
import EmptyCharts from './EmptyCharts';
import ProbabilityCharts from './ProbabilityCharts';

const Probability = ({ id }) => {
  const { data = [] } = useFrequencyGet(id);

  return (
    <>
      <h3>확률 분포</h3>
      <a
        href="#n"
        className="bt_b_blue bt_download lang"
        key="operationDownload"
      >
        다운로드
      </a>
      <div className="graph">
        <div id="frequency">
          {data.length > 0 ? (
            <ProbabilityCharts data={data} />
          ) : (
            <EmptyCharts />
          )}
        </div>
      </div>
    </>
  );
};

export default Probability;
