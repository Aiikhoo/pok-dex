import React, {useEffect, useMemo, useState} from "react";

export const TypeContext = React.createContext(undefined);

export function TypeProvider({children}) {
    const [types, setTypes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("https://pokedex-api.3rgo.tech/api/types")
            .then((response) => {
                setLoading(true);
                if (!response.ok){
                    throw new Error(
                        `This is an HTTP error for types API: The status is ${response.status}`
                    );
                }
                return response.json();
            })
            .then((actualData) => {
                setTypes(actualData['data']);
            })
            .catch((err) => {
                setError(err.message);
                setTypes(null);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    const value = useMemo(() => ({
        'typesList' : types,
        'loadingTypes' : loading,
        'errorTypes' : error
    }), [types, loading, error]);

    return (
        <TypeContext.Provider value={value}>
            {children}
        </TypeContext.Provider>
    )
}

