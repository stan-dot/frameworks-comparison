import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { ReactSsrApp } from './app';

export const ReactSsrAppBasic = () => {
  return (
    <MemoryRouter>
      <ReactSsrApp />
    </MemoryRouter>
  );
};
