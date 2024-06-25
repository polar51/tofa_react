import React, { useCallback, useState } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

const SidebarDatePicker = ({ onDatePick = () => {} }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const handleDatePickerChange = useCallback(
    dates => {
      const [start, end] = dates;
      setStartDate(start);
      setEndDate(end);

      onDatePick(start, end);
    },
    [onDatePick],
  );

  return (
    <>
      <DatePicker
        selected={startDate}
        onChange={handleDatePickerChange}
        startDate={startDate}
        endDate={endDate}
        selectsRange
      />
    </>
  );
};

export default SidebarDatePicker;
