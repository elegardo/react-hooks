import React, { createContext } from 'react';

const defaultValue = [0, () => {}]

const CounterContext = createContext(defaultValue);

export { CounterContext };