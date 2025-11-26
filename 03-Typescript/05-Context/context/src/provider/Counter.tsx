import React, { createContext, useState, useContext } from "react";

// creating interface for render the props.children
interface CounterProviderProps {
    children: React.ReactNode;
}

interface CounterContextValue {
    value: number;
    setCount: (num: number) => void;
}

const CounterContext = createContext<CounterContextValue | null>(null);

export const useCounter = () => {
    return useContext(CounterContext);
}

export const CounterProvider: React.FC<CounterProviderProps> = (props) => {
    
 
    const [count, setCount] = useState<number>(0);

    return (
        <CounterContext.Provider value={{
            value: count,
            setCount,
        }}>
            {props.children}
        </CounterContext.Provider>
    );
};