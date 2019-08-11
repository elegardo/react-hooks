import React, { createContext, useState } from 'react';

// Create a context which gives Provider and Consumer
const CounterContext = createContext([0, () => {}]);

//export the provider with state and other methods
const CounterProvider = props => {

    const [count, setCount] = useState(0);

    return (
        <CounterContext.Provider value={[count, setCount]}>
            {props.children}
        </CounterContext.Provider>
    );
};

export { CounterContext, CounterProvider };
