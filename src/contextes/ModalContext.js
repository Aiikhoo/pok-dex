import { list } from "postcss";
import React, { useMemo, useState } from "react";

export const ModalProvider = React.createContext(undefined);
export function ModalProvider({children}) {
    const [pokemons, setPokemons] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    function openModal(){
        setIsOpen(true);
    };
    function closeModal(){
        setIsOpen(false);
    };
    const value = useMemo(() => ({
        'pokemonsModal' : pokemons,
        'isOpen' : isOpen,
        setPokemons,
        openModal,
        closeModal
    }), [pokemons, isOpen]);
    
    return(
        <ModalContext.Provider value={value}>
            {children}
        </ModalContext.Provider>
    )
}