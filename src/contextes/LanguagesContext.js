import React, { useMemo, useState } from "react";

export const LanguagesContext = React.createContext(undefined);
export function LanguagesProvider({children}) {
    const [language, setLanguage] = useState("fr");
    const value = useMemo(() => ({
        'language' : language,
        setLanguage
    }), [language] );

    return (
        <LanguagesContext.Provider value={value}>
            {children}
        </LanguagesContext.Provider>
    )
}