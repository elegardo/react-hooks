import React, { createContext } from 'react';

// Create a context which gives Provider and Consumer
const CounterContext = createContext([0, () => {}]);

export { CounterContext };