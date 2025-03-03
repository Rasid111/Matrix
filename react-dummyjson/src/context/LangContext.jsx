import { createContext, useEffect, useState } from "react";

export const LangContext = createContext("EN");

export const LangProvider = ({ children }) => {
    const [lang, setLang] = useState(localStorage.getItem('lang'));
    useEffect(() => {
        localStorage.setItem('lang', 'AZ');
    }, [])

    return <LangContext.Provider value={[lang, setLang]}>{children}</LangContext.Provider>
}