import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { faultModelingApi } from '../../api/index';
import {
  FAULT,
  MODELING,
  FLEET_ID,
  FREQUENCY,
  FAULT_MODELING_TREND,
} from '../../constants/query-key-factory';

const useFaultModelingList = filter => {
  const copyFilter = { ...filter };

  if (copyFilter.faultCd.length === 0) {
    copyFilter.faultCd = null;
  }
  if (copyFilter.fleetId.length === 0) {
    copyFilter.fleetId = null;
  }
  if (copyFilter.grade.length === 0) {
    copyFilter.grade = null;
  }

  return useQuery({
    queryKey: MODELING.list(copyFilter),
    queryFn: () => {
      return faultModelingApi.listFaultModeling(copyFilter);
    },
  });
};

const useFaultList = filter => {
  return useInfiniteQuery({
    queryKey: FAULT.list(filter),
    queryFn: () => faultModelingApi.listFault(filter),
    getNextPageParam: lastPage => lastPage.nextPage ?? false,
  });
};

const useFleetIdList = id => {
  return useQuery({
    queryKey: FLEET_ID.detail(id),
    queryFn: () => faultModelingApi.listFleetId(id),
  });
};

const useFrequencyGet = id => {
  return useQuery({
    queryKey: FREQUENCY.detail(id),
    queryFn: () => faultModelingApi.getFrequency(id),
    enabled: false,
  });
};

const useFaultModelingTrendGet = id => {
  return useQuery({
    queryKey: FAULT_MODELING_TREND.detail(id),
    queryFn: () => faultModelingApi.getFaultModelingTrend(id),
    enabled: false,
  });
};

export {
  useFaultModelingList,
  useFaultList,
  useFleetIdList,
  useFrequencyGet,
  useFaultModelingTrendGet,
};
