import React, { useMemo } from 'react';
import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts';

const ProbabilityCharts = ({ data, ...rest }) => {
  const option = useMemo(() => {
    let warning = 0;
    const maxSize = data.length;
    const countNprob = [];

    data.forEach(info => {
      warning = info.warning;
      countNprob.push([info.count, info.prob]);
    });

    const newOption = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#0e1f4c',
          },
        },
      },
      legend: {
        right: '4%',
        top: '5%',
        itemGap: 20,
        data: ['Bayesian', 'MLE', '이상 알람'],
      },
      grid: {
        left: '6%',
        right: '4%',
        bottom: '8%',
        top: '25%',
        containLabel: true,
      },
      xAxis: {
        type: 'value',
        min: 0,
        max: maxSize,
        interval: 1,
        boundaryGap: false,
        axisTick: false,
        splitLine: false,
      },
      yAxis: {
        type: 'value',
        min: 0,
        position: 'left',
        offset: 20,
        interval: 0.03,
        axisTick: false,
        axisLine: { show: false },
        splitLine: { show: true },
        axisLabel: {
          formatter: '{value}',
        },
      },
      dataZoom: { type: 'inside' },
      series: [
        {
          name: '확률 분포',
          type: 'line',
          smooth: true,
          symbol: 'circle',
          symbolSize: 2,
          itemStyle: {
            color: '#0065ff',
          },
          areaStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: 'rgba(0,101,255,0.5)' },
                { offset: 1, color: 'rgba(0,101,255,0.01)' },
              ]),
            },
          },
          markPoint: {
            data: [{ type: 'max', name: '확률 분포' }],
          },
          markLine: {
            data: [
              {
                name: '이상 알람',
                valueIndex: 0,
                lineStyle: {
                  normal: {
                    color: '#ed6c4b',
                    type: 'solid',
                    width: 2,
                  },
                },
                label: {
                  color: '#ed6c4b',
                },
                xAxis: warning,
              },
            ],
          },
          data: countNprob,
        },
        {
          show: false,
          name: '이상 알람',
          type: 'line',
          itemStyle: {
            color: '#ed6c4b',
          },
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

export default ProbabilityCharts;
