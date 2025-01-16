import { createContext, useEffect, useState } from "react";

export const CurrencyContext = createContext("usd");

export const CurrencyProvider = ({ children }) => {
    const [currency, setCurrency] = useState(localStorage.getItem('currency'));
    useEffect(() => {
        localStorage.setItem('currency', 'usd');
    }, [])

    return <CurrencyContext.Provider value={[currency, setCurrency]}>{children}</CurrencyContext.Provider>
}