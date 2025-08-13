import { createContext, useContext, useEffect, useState } from "react";

const KEY = "app_lang";
const LangCtx = createContext({ lang: "en", setLang: () => { } });

export function LangProvider({ children }) {
    const [lang, setLang] = useState(() => localStorage.getItem(KEY) || "en");

    useEffect(() => {
        localStorage.setItem(KEY, lang);
        document.documentElement.setAttribute("lang", lang);
    }, [lang]);

    return (
        <LangCtx.Provider value={{ lang, setLang }}>
            {children}
        </LangCtx.Provider>
    );
}

export const useLangCtx = () => useContext(LangCtx);