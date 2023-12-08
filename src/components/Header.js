import logo from "../logo.png";
import {NavLink} from "react-router-dom";
import { PokemonContext } from "../contextes/PokemonsContext";
import React, {useContext, useState} from "react";
import {LanguageContext} from "../contextes/LanguagesContext";

export default function Header() {

    const { setSearch } = useContext(PokemonContext);

    const { setLanguage } = useContext(LanguageContext);

    const [searchInput, setSearchInput] = useState("");
    const [languageInput, setLanguageInput] = useState("fr");

    const handleSearch = (e) => {
        const searchTerm = e.target.value;
        setSearchInput(searchTerm);
        setSearch(searchTerm);
    }

    const handleLanguage = (e) => {
        const language = e.target.value;
        setLanguage(language);
        setLanguageInput(language);
    }

    return (
        <header className={"fixed top-0 w-full z-20"}>
            <nav className="grid grid-cols-12 h-16 bg-neutral-800 items-center justify-items-center">
                <div className="w-full col-span-3 pl-1">
                    <NavLink to="/">
                        <img className="h-6 md:h-10 lg:h-14" src={logo} alt="logo" />
                    </NavLink>
                </div>
                <div className="w-full col-span-6">
                    <label htmlFor={"Search"} className={"sr-only"}>Rechercher</label>
                    <input
                        type={"text"}
                        name={"Search"}
                        id={"Search"}
                        className={"w-full rounded-2xl p-1 text-xs text-center"}
                        placeholder={"Tapez pour rechercher"}
                        value={searchInput}
                        onChange={handleSearch}
                    />
                </div>
                <div className="w-full col-span-3 flex justify-end pr-1">
                    <label htmlFor={"language"} className={"sr-only"}>Rechercher</label>
                    <select
                        onChange={handleLanguage}
                        value={languageInput}
                        name={"language"}
                        id={"language"}
                        className={"h-full rounded-md border-0 bg-white py-1 text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-xs"}>
                        <option value={"fr"}>Français</option>
                        <option value={"en"}>Anglais</option>
                    </select>
                </div>
            </nav>
        </header>
    );
}