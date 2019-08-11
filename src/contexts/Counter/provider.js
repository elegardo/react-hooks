import React, { useState } from 'react';
import { CounterContext } from './context'

//export the provider with state and other methods
const CounterProvider = props => {

    const [count, setCount] = useState(0);

    return (
        <CounterContext.Provider value={[count, setCount]}>
            {props.children}
        </CounterContext.Provider>
    );
};

export { CounterProvider };
