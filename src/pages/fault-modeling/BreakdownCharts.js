import React, { useMemo } from 'react';
import ReactECharts from 'echarts-for-react';

const BreakdownCharts = ({ data, ...rest }) => {
  const option = useMemo(() => {
    const detectTime = [];
    const anomalyScore = [];
    const frequency = [];
    const expect = [];

    data.forEach(info => {
      detectTime.push(info.detect_time);
      anomalyScore.push(info.anomaly_score);
      expect.push(info.expect);
      frequency.push(info.frequency);
    });

    const newOption = {
      tooltip: {
        trigger: 'axis',
      },
      legend: {
        data: ['고장 발생 건수', '기대값', '이상 빈도 점수'],
      },
      xAxis: [
        {
          type: 'category',
          data: detectTime,
        },
      ],
      yAxis: [
        {
          type: 'value',
        },
      ],
      series: [
        {
          name: '고장 발생 건수',
          type: 'bar',
          data: frequency,
        },
        {
          name: '기대값',
          type: 'bar',
          data: expect,
        },
        {
          name: '이상 빈도 점수',
          type: 'bar',
          data: anomalyScore,
        },
      ],
    };

    return newOption;
  }, [data]);

  return (
    <ReactECharts
      option={option}
      notMerge
      lazyUpdate
      theme="theme_name"
      style={{
        height: '100%',
      }}
      {...rest}
      // onChartReady={this.onChartReadyCallback}
    />
  );
};

export default BreakdownCharts;
