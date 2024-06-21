import React from 'react';
import { HashLoader } from 'react-spinners';

const override = {
  display: 'flex',
  justifyContent: 'center',
};

const Spinner = () => {
  return (
    <>
      <HashLoader color="#6e7cff" cssOverride={override} size={300} />
    </>
  );
};

export default Spinner;
