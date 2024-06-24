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

  const [showSidebar, setShowSidebar] = useState(true);

  const handleSidebarShow = useCallback(() => {
    if (showSidebar) {
      setShowSidebar(false);
    } else {
      setShowSidebar(true);
    }
  }, [showSidebar]);

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
                  test
                </button>
                <div className="md_graph f_cl">
                  <Suspense fallback={<Spinner />}>
                    <Breakdown />
                  </Suspense>
                  <Suspense fallback={<Spinner />}>
                    <Probability />
                  </Suspense>
                </div>

                <Suspense fallback={<Spinner />}>
                  <List />
                </Suspense>
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
