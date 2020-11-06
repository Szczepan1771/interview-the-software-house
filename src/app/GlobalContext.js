import React, {useState, createContext, useMemo} from "react";

export const GlobalContext = createContext({});

function GlobalContextProvider({children}) {
    const globalLogged = localStorage.getItem("isLogged") === "true";
    const [isLogged, setIsLogged] = useState(globalLogged);

    const handleLogged = (value) => {
        setIsLogged(value);
        localStorage.setItem('isLogged', `${value}`)
    };

    const value = useMemo(() => ({
        isLogged,
        handleLogged
    }), [isLogged]);

    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContextProvider
