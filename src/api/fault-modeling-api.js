import { stringify } from '@lib/qs';
import axiosInstance from '../utils/http-client';

const listFaultModeling = async filter => {
  const query = stringify(filter);
  const { data } = await axiosInstance.get(`/fault-modeling-list.json${query}`);

  return data;
};

const listFault = async filter => {
  const query = stringify(filter);

  const { data } = await axiosInstance.get(`/fault-list.json${query}`);

  return data;
};

const listFleetId = async id => {
  const query = stringify(id);

  const { data } = await axiosInstance.get(`/fleet-id.json${query}`);
  return data;
};

const getFrequency = async id => {
  const query = stringify(id);

  const { data } = await axiosInstance.get(`/frequency.json${query}`);
  return data;
};

const getFaultModelingTrend = async id => {
  const query = stringify(id);

  const { data } = await axiosInstance.get(
    `/fault-modeling-trend.json${query}`,
  );
  return data;
};

export {
  listFaultModeling,
  listFault,
  listFleetId,
  getFrequency,
  getFaultModelingTrend,
};
