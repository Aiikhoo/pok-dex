import { useContext, useState } from "react";
import Modal from "../components/Modal";
import { PokemonContext } from "../contextes/PokemonsContext";
import Card from "../components/Card";
import { TypeContext } from "../contextes/TypesContext";
import { LanguagesContext } from "../contextes/LanguagesContext";


export default function Home() {
    const  { setOrder, setType, pokemonsGeneration, pokemonsList, loadingPokemon, errorPokemon, setGeneration } = useContext(PokemonContext)
    const  { typesList, loadingTypes, errorTypes } = useContext(TypeContext);
    const  {language} = useContext(LanguagesContext);


    const [searchGeneration, setSearchGeneration] = useState("");
    const [searchType, setSearchType] = useState("");
    const [searchOrder, setSearchOrder] = useState("");

    const handleGeneration = (e) => {
        const generation = e.target.value;
        setSearchGeneration(generation);
        setGeneration(generation);
    }

    const handleType = (e) => {
        const type = e.target.value;
        setSearchType(type);
        setType(type);
    }

    const handleOrder = (e) => {
        const order = e.target.value;
        setSearchOrder(order);
        setOrder(order);
    }
    let errorMessage = null;
    if (errorPokemon) {
        errorMessage = `There is a problem fetching the post data - ${errorPokemon}`;
    } else if (errorTypes) {
        errorMessage = `There is a problem fetching the post data - ${errorTypes}`;
    }

    if (errorMessage) {
        return (
            <div>{errorMessage}</div>
        );
    }

    if (loadingPokemon || loadingTypes) {
        return (
            <div>A moment please ...</div>
        );
    }

    return (
        <div className={"mt-20"}>
            <div className={"flex flex-row gap-2 flex-wrap justify-between px-2"}>
                <div>
                    <label htmlFor="gen" className="sr-only">Génération</label>

                    <select
                        name="gen"
                        id="gen"
                        onChange={handleGeneration}
                        value={searchGeneration}
                        className={"h-full rounded-md border-0 bg-white py-0 px-2 text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-xs"}>
                        <option value="">Sélectionner une génération</option>
                        {pokemonsGeneration.map(generation => (
                            <option key={"generation-" + generation} value={generation}>Génération {generation}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label htmlFor="type" className="sr-only">Génération</label>

                    <select
                        name="type"
                        id="type"
                        onChange={handleType}
                        value={searchType}
                        className={"h-full rounded-md border-0 bg-white py-0 px-2 text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-xs"}>
                        <option value="">Sélectionner un type</option>
                        {typesList.map(type => (
                            <option key={"type-" + type.id} value={type.id}>Type {type.name[language]}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label htmlFor="order" className="sr-only">Génération</label>

                    <select
                        name="order"
                        id="order"
                        onChange={handleOrder}
                        value={searchOrder}
                        className={"h-full rounded-md border-0 bg-white py-0 px-2 text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-xs"}>
                        <option value="1">Numéro Croissant</option>
                        <option value="2">Numéro Décroissant</option>
                        <option value="3">Alphabétique Croissant</option>
                        <option value="4">Alphabétique Décroissant</option>
                        <option value="5">Poids Croissant</option>
                        <option value="6">Poids Décroissant</option>
                        <option value="7">Taille Croissant</option>
                        <option value="8">Taille Décroissant</option>
                    </select>
                </div>
            </div>
            <Modal/>
            <div className={"grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 mt-2"}>
                {pokemonsList.map(pokemon => (
                    <Card pokemon={pokemon} key={pokemon.id} />
                ))}
            </div>
        </div>
    )
}