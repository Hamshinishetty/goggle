import React from 'react';
import { Puff } from 'react-loader-spinner';

const Loading = () => {
  return (
    <div className='flex justify-center items-center h-full'>
      <Puff color="#00BFFF" height={550} width={80} />
    </div>
  );
};

export default Loading;
