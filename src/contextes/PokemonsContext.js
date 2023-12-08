import React, {useContext, useEffect, useMemo, useState} from "react";
import {LanguagesContext} from "./LanguagesContext";

export const PokemonContext = React.createContext(undefined);

export function PokemonProvider({children}) {
    const [pokemons, setPokemons] = useState([]);
    const [generations, setGenerations] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [search, setSearch] = useState("");
    const [generation, setGeneration] = useState("");
    const [type, setType] = useState("");
    const [order, setOrder] = useState("");

    const { language } = useContext(LanguagesContext);

    useEffect(() => {
        fetch("https://pokedex-api.3rgo.tech/api/pokemon")
            .then((response) => {
                setLoading(true);
                if (!response.ok) {
                    throw new Error(
                        `This is an HTTP error for pokemon API: The status is ${response.status}`
                    );
                }
                return response.json();
            })
            .then((actualData) => {
                setPokemons(actualData['data']);

                const uniqueGenerations = Array.from(
                    new Set(actualData["data"].map((pokemon) => pokemon.generation))
                );
                setGenerations(uniqueGenerations);
            })
            .catch((err) => {
                setError(err.message);
                setPokemons(null);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    const filteredPokemons = useMemo( () => {
        let filtered = pokemons;

        if (search) {
            filtered = pokemons.filter((pokemon) =>
                pokemon.name[language].toLowerCase().includes(search.toLowerCase())
            );
        }

        if (generation) {
            filtered = filtered.filter((pokemon) => pokemon.generation === Number(generation));
        }

        if (type) {
            filtered = filtered.filter((pokemon) => pokemon.types.includes(Number(type)));
        }

        switch (order) {
            case "1":
                filtered = filtered.sort((a, b) => a.id - b.id);
                break;
            case "2":
                filtered = filtered.sort((a, b) => b.id - a.id);
                break;
            case "3":
                filtered = filtered.sort((a, b) => a.name[language].toLowerCase().localeCompare(b.name[language].toLowerCase()));
                break;
            case "4":
                filtered = filtered.sort((a, b) => b.name[language].toLowerCase().localeCompare(a.name[language].toLowerCase()));
                break;
            case "5":
                filtered = filtered.sort((a, b) => a.weight - b.weight);
                break;
            case "6":
                filtered = filtered.sort((a, b) => b.weight - a.weight);
                break;
            case "7":
                filtered = filtered.sort((a, b) => a.height - b.height);
                break;
            case "8":
                filtered = filtered.sort((a, b) => b.height - a.height);
                break;
            default:
                filtered = filtered.sort((a, b) => a.id - b.id);
        }

        return filtered;
    }, [pokemons, search, generation, type, order, language]);

    const value = useMemo(() => ({
        'pokemonsList' : filteredPokemons,
        'pokemonsGeneration' : generations,
        'loadingPokemon' : loading,
        'errorPokemon' : error,
        setSearch,
        setGeneration,
        setType,
        setOrder,
    }), [filteredPokemons, generations, loading, error]);

    return (
        <PokemonContext.Provider value={value}>
            {children}
        </PokemonContext.Provider>
    )
}