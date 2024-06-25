import React from 'react';
import { useFaultModelingTrendGet } from '@hooks/api/fault-modeling-hook';
import { Link } from 'react-router-dom';
import BreakdownCharts from './BreakdownCharts';
import EmptyCharts from './EmptyCharts';

const Breakdown = ({ id }) => {
  const { data = [] } = useFaultModelingTrendGet(id);

  return (
    <>
      <h3>고장추이</h3>

      <Link
        to="#n"
        className="bt_b_blue bt_download lang"
        key="operationDownload"
      >
        다운로드
      </Link>
      <div className="graph">
        <div id="failureTrend">
          {data.length > 0 ? <BreakdownCharts data={data} /> : <EmptyCharts />}
        </div>
      </div>
    </>
  );
};

export default Breakdown;
