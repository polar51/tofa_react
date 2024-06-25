import React, { useRef } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import { useVirtualizer } from '@tanstack/react-virtual';
import { useFaultModelingList } from '@hooks/api';

const EmptyRowCreator = () => {
  return (
    <>
      <tr>
        <td colSpan="9">
          <span>고장코드를 선택해 주세요. </span>
        </td>
      </tr>
    </>
  );
};

const RowCreator = ({ faultInfo, ...rest }) => {
  const {
    detect_time: detectTime,
    fleet_id: fleetId,
    mfds,
    fault_name: faultName,
    cnt,
    expect,
    anomaly_score: anomalyScore,
    level,
  } = faultInfo;
  return (
    <>
      <tr className="listSelect" style={{ cursor: 'pointer' }} {...rest}>
        <td style={{ flex: 0.8 }}>{detectTime}</td>
        <td style={{ flex: 1 }} key={fleetId}>
          {fleetId}
        </td>
        <td style={{ flex: 1 }}>{mfds}</td>
        <td style={{ flex: 3.3 }}>{faultName}</td>
        <td style={{ flex: 1 }}>{cnt}</td>
        <td style={{ flex: 1 }}>{expect}</td>
        <td style={{ flex: 1 }}>{anomalyScore}</td>
        <td style={{ flex: 1 }}>{level}</td>
      </tr>
    </>
  );
};

const List = ({ onRowClick }) => {
  const { control } = useFormContext();
  const filterOptions = useWatch({
    control,
  });

  const { data } = useFaultModelingList({
    startDate: filterOptions.startDate,
    endDate: filterOptions.endDate,
    fleetId: filterOptions.fleet_id,
    grade: filterOptions.grade,
    faultCd: filterOptions.faultCd,
  });

  const parentRef = useRef();

  const rowVirtualizer = useVirtualizer({
    count: data.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 50,
    overscan: 30,
  });

  return (
    <>
      <div className="data_sc">
        <div className="t_area">
          <table className="tb_data">
            <caption>상세정보</caption>
            <colgroup>
              <col width="8%" />
              <col width="10%" />
              <col width="10%" />
              <col width="%" />
              <col width="10%" />
              <col width="10%" />
              <col width="10%" />
              <col width="10%" />
            </colgroup>
            <thead>
              <tr>
                <th scope="col">고장 검지 일자</th>
                <th scope="col">차량번호</th>
                <th scope="col">고장번호</th>
                <th scope="col">고장명</th>
                <th scope="col">발생 건수</th>
                <th scope="col">기대값</th>
                <th scope="col">이상빈도 점수</th>
                <th scope="col">고장등급</th>
              </tr>
            </thead>
          </table>
        </div>
        <div className="c_area" ref={parentRef} style={{ overflow: 'auto' }}>
          <table className="tb_data">
            <caption>상세정보</caption>
            <colgroup>
              <col width="8%" />
              <col width="10%" />
              <col width="10%" />
              <col width="%" />
              <col width="10%" />
              <col width="10%" />
              <col width="10%" />
              <col width="10%" />
            </colgroup>
            <tbody
              id="test_modeling"
              style={{
                position: 'relative',
                height: `${rowVirtualizer.getTotalSize()}px`,
              }}
            >
              {rowVirtualizer.getVirtualItems().map(row => {
                const info = data[row.index];
                return info ? (
                  <RowCreator
                    faultInfo={info}
                    key={row.key}
                    ref={row.measureRef}
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '38px',
                      transform: `translateY(${row.start}px)`,
                      display: 'flex',
                      cursor: 'pointer',
                    }}
                    onClick={() => onRowClick(row.key)}
                  />
                ) : (
                  <EmptyRowCreator />
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default List;
