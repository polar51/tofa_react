import axios from 'axios';
import { stringify } from '@lib/qs';

const listFaultModeling = async filter => {
  const query = stringify(filter);
  const { data } = await axios.get(`/fault-modeling-list.json${query}`);

  return data;
};

const listFault = async filter => {
  const query = stringify(filter);

  const { data } = await axios.get(`/fault-list.json${query}`);

  return data;
};

const listFleetId = async id => {
  const query = stringify(id);

  const { data } = await axios.get(`/fleet-id.json${query}`);
  return data;
};

const getFrequency = async id => {
  const query = stringify(id);

  const { data } = await axios.get(`/frequency.json${query}`);
  return data;
};

const getFaultModelingTrend = async id => {
  const query = stringify(id);

  const { data } = await axios.get(`/fault-modeling-trend.json${query}`);
  return data;
};

export {
  listFaultModeling,
  listFault,
  listFleetId,
  getFrequency,
  getFaultModelingTrend,
};
