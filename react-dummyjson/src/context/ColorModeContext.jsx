import { createContext, useEffect, useState } from "react";

export const ColorModeContext = createContext("dark");

export const ColorModeProvider = ({ children }) => {
    const [colorMode, setColorMode] = useState(localStorage.getItem('colorMode'));
    useEffect(() => {
        localStorage.setItem('colorMode', 'dark');
        console.log(document.querySelector("html").attributes);

        document.querySelector("html").setAttribute("data-bs-theme", "dark")
    }, [])

    return <ColorModeContext.Provider value={[colorMode, setColorMode]}>{children}</ColorModeContext.Provider>
}