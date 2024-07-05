import React from 'react';
import { CircularProgress } from '@mui/material';

const dataFetching = (WrappedComponent: any, useQuery: any) => {
  return function DataFetching(props: any) {
    const { data, isLoading, error } = useQuery();

    if (isLoading) {
      return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <CircularProgress />
        </div>
      );
    }

    if (error) {
      return <div>Error: {error.message}</div>;
    }

    return <WrappedComponent data={data} {...props} />;
  };
};

export default dataFetching;
