import React from 'react';
import Loader from 'react-loader-spinner';

const spinLoader = () => (
  <div className="loader">
    <div className="loader-content">
      <Loader
        type="Oval"
        color="#fff"
        height="100"
        width="100"
      />
    </div>
  </div>
);

export default spinLoader;
