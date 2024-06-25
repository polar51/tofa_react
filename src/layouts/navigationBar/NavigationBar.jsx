import React, { useEffect, useState } from 'react';
import logo from '@assets/images/logo.png';
import bell from '@assets/images/ic_bell_wh_off.png';
import Weather from '@components/module/Weather';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  const [time, setTime] = useState('00:00:00');
  const idx = 13;

  const dateCreator = () => {
    const today = new Date();
    const yyyy = String(today.getFullYear()).padStart(2, '0');
    const mm = String(today.getMonth()).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    const date = `${yyyy}.${mm}.${dd}`;

    return <span className="yymmdd">{date}</span>;
  };

  const timeCreator = () => {
    const today = new Date();
    const hh = String(today.getHours()).padStart(2, '0');
    const mm = String(today.getMinutes()).padStart(2, '0');
    const ss = String(today.getSeconds()).padStart(2, '0');

    const newTime = `${hh}:${mm}:${ss}`;

    setTime(newTime);
  };

  useEffect(() => {
    const timeId = setInterval(() => timeCreator(), 1000);
    return () => clearInterval(timeId);
  });

  return (
    <>
      <div id="header">
        <div className="t_area">
          <Link href="#n" className="bt_header">
            헤더 여닫기
          </Link>
          <h1>
            <img
              src={logo}
              style={{ maxWidth: '100%', height: 'auto' }}
              alt="HYUNDAI Rotem"
            />
          </h1>
        </div>

        <div className="n_info">
          <div className="box">
            <div className="date section today">
              <span className="yymmddweek" style={{ fontSize: '13px' }}>
                {dateCreator()}
              </span>
              <span className="hhmm">
                <span className="hhmmss">{time}</span>
              </span>
            </div>

            <Weather />
          </div>
        </div>

        <div id="alarmBtn" className="notice_box">
          <ul>
            <li className="ic_bell">
              <img id="alarmStatus" src={bell} alt="" />
            </li>
          </ul>
        </div>

        <div
          className="sc_y mCustomScrollbar _mCS_1 mCS_no_scrollbar"
          style={{
            top: '210px',
          }}
        >
          <ul id="gnb">
            <li className={idx === 1 ? 'on' : ''}>
              <span className="lang" key="totalMonitoring">
                모니터링
              </span>
              <ul>
                <li className={idx === 2 ? 'on' : ''}>
                  <Link href="/" className="lang" key="totalAllFleets1">
                    전체 편성
                  </Link>
                </li>
                <li className={idx === 3 ? 'on' : ''}>
                  <Link href="/" className="lang" key="totalfleets">
                    개별 편성
                  </Link>
                </li>
                <li className={idx === 4 ? 'on' : ''}>
                  <Link
                    href="/"
                    // onClick="sessionStorage.setItem('graph','c01')"
                    className="lang"
                    key="totalOperation"
                  >
                    운행
                  </Link>
                </li>
                <li className={idx === 5 ? 'on' : ''}>
                  <Link href="/" className="lang" key="totalPerformance">
                    퍼포먼스
                  </Link>
                </li>
              </ul>
            </li>
            <li className={idx === 6 ? 'on' : ''}>
              <span className="lang" key="totalDashboard">
                대시보드
              </span>
              <ul>
                <li className={idx === 7 ? 'on' : ''}>
                  <Link href="/" className="lang" key="totalFaultsToday">
                    고장 투데이
                  </Link>
                </li>

                <li className={idx === 8 ? 'on' : ''}>
                  <Link href="/" className="lang" key="totalStatistics">
                    고장 통계
                  </Link>
                </li>
              </ul>
            </li>
            <li className={idx === 8 ? 'on' : ''}>
              <span className="lang" key="totalFaults">
                고장
              </span>
              <ul>
                <li className={idx === 10 ? 'on' : ''}>
                  <Link href="/" className="lang" key="totalFaultsHistory">
                    고장 이력
                  </Link>
                </li>
                <li className={idx === 11 ? 'on' : ''}>
                  <Link href="/" className="lang" key="totalViewFaults">
                    고장 분석
                  </Link>
                </li>
                <li className={idx === 12 ? 'on' : ''}>
                  <Link href="/" className="lang" key="totalTrend">
                    트렌드
                  </Link>
                </li>
                <li className={idx === 13 ? 'on' : ''}>
                  <Link href="/" className="lang" key="totalModeling1">
                    모델링
                  </Link>
                </li>
              </ul>
            </li>
            <li className={idx === 14 ? 'on' : ''}>
              <span className="lang" key="totalDiagnostics">
                진단
              </span>
              <ul>
                <li className={idx === 15 ? 'on' : ''}>
                  <Link href="/" className="lang" key="totalFleetDiagnosis">
                    편성 진단
                  </Link>
                </li>
                <li className={idx === 16 ? 'on' : ''}>
                  <Link href="/" className="lang" key="totalTrend">
                    트렌드
                  </Link>
                </li>
                <li className={idx === 17 ? 'on' : ''}>
                  <Link href="/" className="lang" key="totalModeling2">
                    모델링
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <Link href="/" className="bt_txt bt_left bt_admin">
          <span className="lang" key="adminAdminMode">
            관리자 모드
          </span>
        </Link>

        <Link href="/" className="bt_txt bt_left bt_mypage">
          <span>마이 페이지</span>
        </Link>
        <Link href="/" className="bt_txt bt_left bt_download">
          <span>다운로드</span>
        </Link>
        <Link href="/" className="bt_txt bt_left bt_logout">
          <span>로그아웃</span>
        </Link>
        <div className="copyright">DESIGNED BY HMSOLUTION INC.</div>
      </div>
    </>
  );
};

export default NavigationBar;
