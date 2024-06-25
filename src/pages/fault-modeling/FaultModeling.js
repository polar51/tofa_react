import React, { lazy, Suspense, useCallback, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import SearchButton from '@components/module/SearchButton';
import Spinner from '@components/element/Spinner';
import { FAULTMODELING } from '@constants/index';
import Breakdown from './Breakdown';
import Probability from './Probability';

const defaultFilterOptions = {
  protocol_type: FAULTMODELING.PROTOCOL_TYPE,
  carNo: [...FAULTMODELING.CAR_NO],
  device: [...FAULTMODELING.DEVICE],
  grade: [...FAULTMODELING.GRADE],
  fleet_id: [],
  faultCd: [],
  startDate: '2024-06-14',
  endDate: '2024-06-16',
};

const List = lazy(() => import('./List'));
const SideBar = lazy(() => import('./SideBar'));

const FaultModeling = () => {
  const methods = useForm({
    defaultValues: defaultFilterOptions,
  });

  const [selectedId, setSelectedId] = useState('');
  const [showSidebar, setShowSidebar] = useState(true);

  const handleSidebarShow = useCallback(() => {
    if (showSidebar) {
      setShowSidebar(false);
    } else {
      setShowSidebar(true);
    }
  }, [showSidebar]);

  const handleRowClick = useCallback(id => {
    setSelectedId(id.toString());
  }, []);

  return (
    <>
      <FormProvider {...methods}>
        <form onChange={methods.handleSubmit}>
          <div id="wrap" className={showSidebar ? 'iq_so' : null}>
            <div className="sidenav" />

            <div id="container">
              <h2 className="s03_05 lang" key="totalModeling1">
                모델링
              </h2>

              <div className="modeling">
                <button
                  onClick={() => {
                    console.log(methods.getValues());
                    debugger;
                  }}
                  type="button"
                >
                  filter
                </button>
                <div className="md_graph f_cl">
                  <div className="w_box">
                    <Suspense fallback={<Spinner />}>
                      <Breakdown id={selectedId} />
                    </Suspense>
                  </div>
                  <div className="w_box">
                    <Suspense fallback={<Spinner />}>
                      <Probability id={selectedId} />
                    </Suspense>
                  </div>
                </div>

                <div className="w_box d_list">
                  <Suspense fallback={<Spinner />}>
                    <List onRowClick={handleRowClick} />
                  </Suspense>
                </div>
              </div>
              <Suspense fallback={<Spinner />}>
                <SideBar>
                  <SearchButton
                    onClick={handleSidebarShow}
                    $show={showSidebar}
                    text="검색"
                  />
                </SideBar>
              </Suspense>
            </div>
          </div>
        </form>
      </FormProvider>
    </>
  );
};

export default FaultModeling;