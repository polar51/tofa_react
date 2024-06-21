const WEATHER = {
  all: ['weather'],
  details: () => [...WEATHER.all, 'detail'],
  detail: id => [...WEATHER.details(), id],
};
const WEATHER_ICON = {
  all: ['weather_icon'],
  details: () => [...WEATHER_ICON.all, 'detail'],
  detail: id => [...WEATHER_ICON.details(), id],
};
const MODELING = {
  all: ['modeling'],
  lists: () => [...MODELING.all, 'list'],
  list: filter => [...MODELING.all, { filter }],
};

const FAULT = {
  all: ['fault'],
  lists: () => [...FAULT.all, 'list'],
  list: filter => [...FAULT.all, { filter }],
};

const FLEET_ID = {
  all: ['fleetId'],
  details: () => [...FLEET_ID.all, 'detail'],
  detail: id => [...FLEET_ID.details(), id],
};

const FREQUENCY = {
  all: ['frequency'],
  details: () => [...FREQUENCY.all, 'detail'],
  detail: id => [...FREQUENCY.details(), id],
};

const FAULT_MODELING_TREND = {
  all: ['trend'],
  details: () => [...FAULT_MODELING_TREND.all, 'detail'],
  detail: id => [...FAULT_MODELING_TREND.details(), id],
};

export {
  WEATHER,
  WEATHER_ICON,
  MODELING,
  FAULT,
  FLEET_ID,
  FREQUENCY,
  FAULT_MODELING_TREND,
};
