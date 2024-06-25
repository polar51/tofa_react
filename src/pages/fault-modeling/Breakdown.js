import React from 'react';
import { useFaultModelingTrendGet } from '@hooks/api/fault-modeling-hook';
import BreakdownCharts from './BreakdownCharts';
import EmptyCharts from './EmptyCharts';

const Breakdown = ({ id }) => {
  const { data = [] } = useFaultModelingTrendGet(id);

  return (
    <>
      <div className="w_box">
        <h3>고장추이</h3>

        <a
          href="#n"
          className="bt_b_blue bt_download lang"
          key="operationDownload"
        >
          다운로드
        </a>
        <div className="graph">
          <div id="failureTrend">
            {data.length > 0 ? (
              <BreakdownCharts data={data} />
            ) : (
              <EmptyCharts />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Breakdown;
