import React, { useState } from 'react';
import context from './context';

function Provider({ children }) {
  const values = {

  }
  return (
    <context.Provider value={values}>
      { children }
    </context.Provider>
  );
}

export default Provider;