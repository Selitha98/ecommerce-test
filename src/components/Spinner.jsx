/* eslint-disable react/prop-types */
import React from 'react';
import { ClipLoader, ScaleLoader } from 'react-spinners';

const Spinner = ({ 
  size = 50, 
  color = "#3B82F6", 
  loading = true, 
  className = "",
  testid = "spinner"
}) => {
  return (
    <div 
      className={`flex justify-center items-center ${className}`}
      data-testid={testid}
    >
      <ScaleLoader
        color={color}
        loading={loading}
        size={size}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Spinner;