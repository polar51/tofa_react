import React from 'react';

const RowCreator = ({ faultCode, idx, ...rest }) => {
  return (
    <>
      <tr {...rest}>
        <td style={{ flex: 1 }}>
          <label htmlFor="faultCd" className="sr-only">
            rowCheck
          </label>
          <input type="checkbox" defaultChecked value={faultCode.faultCd} />
        </td>
        <td style={{ flex: 1 }}>{faultCode.faultCd}</td>
        <td style={{ flex: 1 }}>{faultCode.carNo}</td>
        <td style={{ flex: 1 }}>{faultCode.faultNo}</td>
        <td style={{ flex: 3 }}>{faultCode.faultName || 'N/A'}</td>
        <td style={{ flex: 2 }}>{faultCode.device}</td>
      </tr>
    </>
  );
};

const FaultCodeTable = ({ rowVirtualizer, parentRef, data }) => {
  return (
    <>
      <div
        className="data_sc"
        style={{
          border: '1px solid #eee',
        }}
      >
        <dt
          style={{
            lineHeight: '66px',
            fontSize: '20px',
            fontWeight: '700',
            borderBottom: '1px solid #eee',
            padding: '0 19px',
          }}
        >
          고장코드
          <a href="/" id="filterBtn" className="bt_filter">
            필터
          </a>
        </dt>
        <div className="t_area">
          <table className="tb_data">
            <caption>검색 결과</caption>
            <colgroup>
              <col width="10%" />
              <col width="10%" />
              <col width="10%" />
              <col width="10%" />
              <col width="25%" />
              <col width="20%" />
            </colgroup>
            <thead>
              <tr>
                <th scope="col">
                  <label htmlFor="name" className="sr-only">
                    allCheck
                  </label>
                  <input type="checkbox" id="name" />
                </th>
                <th scope="col">MFDS</th>
                <th scope="col">고장코드</th>
                <th scope="col">호차</th>
                <th scope="col">고장명</th>
                <th scope="col">장치명</th>
              </tr>
            </thead>
          </table>
        </div>
        <div
          ref={parentRef}
          className="c_area fault_code"
          style={{
            top: '110px',
            overflow: 'auto',
          }}
        >
          <table className="tb_data" id="ft_table">
            <caption>검색 결과</caption>
            <colgroup>
              <col width="10%" />
              <col width="10%" />
              <col width="10%" />
              <col width="10%" />
              <col width="25%" />
              <col width="20%" />
            </colgroup>

            <tbody
              id="faultCode"
              style={{
                position: 'relative',
                height: `${rowVirtualizer.getTotalSize()}px`,
              }}
            >
              {rowVirtualizer.getVirtualItems().map(virtualRow => {
                const faultCode = data.pages.flat()[virtualRow.index];
                return (
                  <RowCreator
                    faultCode={faultCode}
                    ref={virtualRow.measureRef}
                    idx={virtualRow.key}
                    key={virtualRow.index}
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      transform: `translateY(${virtualRow.start}px)`,
                      display: 'flex',
                    }}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default FaultCodeTable;
