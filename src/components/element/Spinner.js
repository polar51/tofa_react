import React from 'react';
import { FadeLoader } from 'react-spinners';

const spinnerBoxOverride = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
};

const Spinner = () => {
  return (
    <div style={spinnerBoxOverride}>
      <FadeLoader color="#226af6" size={20} />
    </div>
  );
};

export default Spinner;
