import React, { useCallback, useEffect, useRef } from 'react';
import { useVirtualizer } from '@tanstack/react-virtual';
import { useFormContext, useWatch } from 'react-hook-form';
import { FAULTMODELING } from '@constants/index';
import { useFaultList, useFleetIdList } from '@hooks/api';
import FaultCodeTable from './FaultCodeTable';
import SidebarDatePicker from './SidebarDatePicker';

const FleetIdButtonCreator = ({ id, idx, ...rest }) => {
  const { fleetId } = id;
  const { register } = useFormContext();

  return (
    <li key={fleetId}>
      <input
        type="checkbox"
        className={`trainNo_${idx}`}
        value={`${fleetId}10`}
        id={`trainNo_${fleetId}`}
        {...register('fleet_id')}
        {...rest}
      />
      <label htmlFor={`trainNo_${fleetId}`}>{fleetId}</label>
    </li>
  );
};

const SideBar = ({ children }) => {
  const { control, getValues, setValue, register } = useFormContext();
  const filterOptions = useWatch({
    control,
  });

  const {
    data: faultList,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useFaultList();

  const { data: fleetIds } = useFleetIdList({
    protocol_type: filterOptions.protocol_type,
  });

  const parentRef = useRef();

  const faultListVirtualizer = useVirtualizer({
    count: faultList ? faultList.pages.flat().length : 0,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 50,
    overscan: 30,
  });

  useEffect(() => {
    const [lastItem] = [...faultListVirtualizer.getVirtualItems()].reverse();

    if (
      lastItem &&
      lastItem.index >= faultList.pages.flat().length - 1 &&
      hasNextPage &&
      !isFetchingNextPage
    ) {
      fetchNextPage();
    }
  }, [
    faultList,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
    faultListVirtualizer,
  ]);

  useEffect(() => {
    const newFleetIds = [];
    fleetIds.forEach(({ fleetId }) => {
      newFleetIds.push(`${fleetId}10`);
    });
    setValue('fleet_id', newFleetIds);
  }, [fleetIds, setValue]);

  useEffect(() => {
    const newFualtCds = [];
    const faultCdList = faultList.pages.flat();

    faultCdList.forEach(({ faultCd }) => {
      newFualtCds.push(faultCd.toString());
    });
    setValue('faultCd', newFualtCds);
  }, [faultList, setValue]);

  const handleCheckedAll = useCallback(
    optionName => {
      const newOptions = [];

      const toUpperCase = optionName.toUpperCase();
      const defaultValues = FAULTMODELING[toUpperCase];

      const getSelected = getValues(optionName);

      if (getSelected.length !== defaultValues.length) {
        newOptions.push(...defaultValues);
      }

      setValue(optionName, newOptions);
    },
    [getValues, setValue],
  );

  const handleCheckedAllToCarNo = useCallback(() => {
    const newOptions = [];
    const defaultValues = FAULTMODELING.CAR_NO;

    const getSelected = getValues('carNo');

    if (getSelected.length !== defaultValues.length) {
      newOptions.push(...defaultValues);
    }

    setValue('carNo', newOptions);
  }, [getValues, setValue]);

  const handleCheckedAllToFleetId = useCallback(() => {
    const newOptions = [];
    const defaultValues = [...fleetIds];

    const getSelected = getValues('fleet_id');

    if (getSelected.length !== defaultValues.length) {
      defaultValues.forEach(({ fleetId }) => {
        newOptions.push(`${fleetId}10`);
      });
    }

    setValue('fleet_id', newOptions);
  }, [fleetIds, getValues, setValue]);

  const checkedALlChecker = useCallback(
    optionName => {
      const toUpperCase = optionName.toUpperCase();
      const defaultValues = [...FAULTMODELING[toUpperCase]];
      const getSelected = getValues(optionName);

      return getSelected.length === defaultValues.length;
    },
    [getValues],
  );

  const checkedAllCheckerToCarNo = useCallback(() => {
    const defaultValues = [...FAULTMODELING.CAR_NO];

    const getSelected = getValues('carNo');

    return getSelected.length === defaultValues.length;
  }, [getValues]);

  const checkedAllCheckerToFleetId = useCallback(() => {
    const defaultValues = [...fleetIds];
    const getSelected = getValues('fleet_id');

    return getSelected.length === defaultValues.length;
  }, [fleetIds, getValues]);

  const handleDatePickerChange = useCallback(
    (start, end) => {
      setValue('startDate', start);
      setValue('endDate', end);
    },
    [setValue],
  );

  return (
    <>
      <div className="iq_search_option">
        {children}
        <div className="period lang" key="faultsPeriod">
          기간
          <SidebarDatePicker onDatePick={handleDatePickerChange} />
          <div className="cb_all" style={{ display: 'inline-block' }}>
            <select
              id="step"
              style={{
                marginLeft: '10%',
                minWidth: '50px',
                border: '1px solid #b1b2b5',
                fontSize: '14px',
              }}
              {...register('protocol_type')}
            >
              <option value="Step1_48">1단계(48칸)</option>
              <option value="Step1_40">1단계(40칸)</option>
              <option value="Step2_48">2단계(48칸)</option>
            </select>
          </div>
        </div>

        <a href="/" className="bt_reset">
          검색
        </a>

        {/* // options */}
        <div className="options f_cl">
          <dl>
            <dt>
              편성
              <div className="cb_all">
                <input
                  type="checkbox"
                  id="cb_so_g01_all"
                  name="fleet_id"
                  onChange={handleCheckedAllToFleetId}
                  checked={checkedAllCheckerToFleetId()}
                />
                <label className="cLabel" htmlFor="cb_so_g01_all">
                  ALL
                </label>
              </div>
            </dt>
            <dt
              style={{
                height: '50px',
              }}
            >
              <div
                className="cb_all"
                style={{
                  left: '50px',
                }}
              >
                <input type="checkbox" name="TC1" id="TC1" defaultChecked />
                <label htmlFor="TC1">TC1</label>
              </div>
              <div
                className="cb_all"
                style={{
                  right: '50px',
                }}
              >
                <input type="checkbox" name="TC2" id="TC2" />
                <label htmlFor="TC2">TC2</label>
              </div>
            </dt>
            <dd>
              <ul id="fleet_id">
                {fleetIds.map((id, idx) => {
                  return (
                    <FleetIdButtonCreator
                      id={id}
                      idx={idx}
                      key={`re${id.fleetId}`}
                    />
                  );
                })}
              </ul>
            </dd>
          </dl>

          <dl>
            <dt>
              호차
              <div className="cb_all">
                <input
                  type="checkbox"
                  id="cb_so_g02_all"
                  name="carNo"
                  onChange={handleCheckedAllToCarNo}
                  checked={checkedAllCheckerToCarNo()}
                />
                <label className="cLabel" htmlFor="cb_so_g02_all">
                  ALL
                </label>
              </div>
            </dt>
            <dd>
              <ul id="car_id">
                <li>
                  <input
                    type="checkbox"
                    {...register('carNo')}
                    value="01"
                    id="carNo_01"
                  />
                  <label htmlFor="carNo_01">01</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    {...register('carNo')}
                    value="02"
                    id="carNo_02"
                  />
                  <label htmlFor="carNo_02">02</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    {...register('carNo')}
                    value="03"
                    id="carNo_03"
                  />
                  <label htmlFor="carNo_03">03</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    {...register('carNo')}
                    value="04"
                    id="carNo_04"
                  />
                  <label htmlFor="carNo_04">04</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    {...register('carNo')}
                    value="05"
                    id="carNo_05"
                  />
                  <label htmlFor="carNo_05">05</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    {...register('carNo')}
                    value="06"
                    id="carNo_06"
                  />
                  <label htmlFor="carNo_06">06</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    {...register('carNo')}
                    value="07"
                    id="carNo_07"
                  />
                  <label htmlFor="carNo_07">07</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    {...register('carNo')}
                    value="08"
                    id="carNo_08"
                  />
                  <label htmlFor="carNo_08">08</label>
                </li>
              </ul>
            </dd>
          </dl>
          <dl>
            <dt className="lang" key="faultsFaultsGrade">
              고장등급
              <div className="cb_all">
                <input
                  type="checkbox"
                  id="cb_so_g03_all"
                  name="grade"
                  onChange={() => handleCheckedAll('grade')}
                  checked={checkedALlChecker('grade')}
                />
                <label className="cLabel" htmlFor="cb_so_g03_all">
                  ALL
                </label>
              </div>
            </dt>
            <dd>
              <ul>
                <li>
                  <input
                    type="checkbox"
                    {...register('grade')}
                    id="cb_so_g02_01"
                    value="A"
                  />
                  <label htmlFor="cb_so_g02_01">A</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    {...register('grade')}
                    id="cb_so_g02_02"
                    value="B"
                  />
                  <label htmlFor="cb_so_g02_02">B</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    {...register('grade')}
                    id="cb_so_g02_03"
                    value="C"
                  />
                  <label htmlFor="cb_so_g02_03">C</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    {...register('grade')}
                    id="cb_so_g02_04"
                    value="D"
                  />
                  <label htmlFor="cb_so_g02_04">D</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    {...register('grade')}
                    id="cb_so_g02_05"
                    value="W"
                  />
                  <label htmlFor="cb_so_g02_05">W</label>
                </li>
              </ul>
            </dd>
          </dl>

          <dl>
            <dt className="lang" key="faultsDevice">
              장치
              <div className="cb_all">
                <input
                  type="checkbox"
                  // onChange={onCheckedAll}
                  id="cb_so_g04_all"
                  onChange={() => handleCheckedAll('device')}
                  checked={checkedALlChecker('device')}
                />
                <label className="cLabel" htmlFor="cb_so_g04_all">
                  ALL
                </label>
              </div>
            </dt>
            <dd>
              <ul>
                <li>
                  <input
                    type="checkbox"
                    {...register('device')}
                    id="cb_so_g03_01"
                    value="ATC"
                  />
                  <label htmlFor="cb_so_g03_01">ATC</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    {...register('device')}
                    id="cb_so_g03_02"
                    value="BECU"
                  />
                  <label htmlFor="cb_so_g03_02">BECU</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    {...register('device')}
                    id="cb_so_g03_03"
                    value="BMS"
                  />
                  <label htmlFor="cb_so_g03_03">BMS</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    {...register('device')}
                    id="cb_so_g03_04"
                    value="CMSB"
                  />
                  <label htmlFor="cb_so_g03_04">CMSB</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    {...register('device')}
                    id="cb_so_g03_05"
                    value="DCU"
                  />
                  <label htmlFor="cb_so_g03_05">DCU</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    {...register('device')}
                    id="cb_so_g03_06"
                    value="FDU"
                  />
                  <label htmlFor="cb_so_g03_06">FDU</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    {...register('device')}
                    id="cb_so_g03_07"
                    value="HVAC"
                  />
                  <label htmlFor="cb_so_g03_07">HVAC</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    {...register('device')}
                    id="cb_so_g03_08"
                    value="PSD"
                  />
                  <label htmlFor="cb_so_g03_08">PSD</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    {...register('device')}
                    id="cb_so_g03_09"
                    value="RADIO"
                  />
                  <label htmlFor="cb_so_g03_09">RADIO</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    {...register('device')}
                    id="cb_so_g03_10"
                    value="RTD"
                  />
                  <label htmlFor="cb_so_g03_10">RTD</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    {...register('device')}
                    id="cb_so_g03_11"
                    value="SIV"
                  />
                  <label htmlFor="cb_so_g03_11">SIV</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    {...register('device')}
                    id="cb_so_g03_12"
                    value="TCMS"
                  />
                  <label htmlFor="cb_so_g03_12">TCMS</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    {...register('device')}
                    id="cb_so_g03_13"
                    value="VVVF"
                  />
                  <label htmlFor="cb_so_g03_13">VVVF</label>
                </li>
              </ul>
            </dd>
          </dl>
        </div>

        <FaultCodeTable
          rowVirtualizer={faultListVirtualizer}
          parentRef={parentRef}
          data={faultList}
        />
      </div>
    </>
  );
};

export default SideBar;
