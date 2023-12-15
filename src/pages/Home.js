import { useContext } from "react";
import Modal from "../components/Modal";
import { PokemonContext } from "../contextes/PokemonsContext";
import Card from "../components/Card";

export default function Home() {
    const  { pokemonsList } = useContext(PokemonContext)
    return (
        <div className={"mt-20"}>
            <div className={"flex flex-row gap-2 flex-wrap justify-between px-2"}>
                <div>
                    <label htmlFor="gen" className="sr-only">Génération</label>

                    <select name="gen" id="gen">
                        <option value="">Sélectionner une génération</option>
                        <option value="1">Génération 1</option>
                        <option value="2">Génération 2</option>
                        <option value="3">Génération 3</option>
                        <option value="4">Génération 4</option>
                        <option value="5">Génération 5</option>
                        <option value="6">Génération 6</option>
                        <option value="7">Génération 7</option>
                        <option value="8">Génération 8</option>
                        <option value="9">Génération 9</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="type" className="sr-only">Génération</label>

                    <select name="type" id="type">
                        <option value="">Sélectionner un type</option>
                        <option value="1">Type Acier</option>
                        <option value="2">Type Combat</option>
                        <option value="3">Type Dragon</option>
                        <option value="4">Type Eau</option>
                        <option value="5">Type Electrik</option>
                        <option value="6">Type Fée</option>
                        <option value="7">Type Feu</option>
                        <option value="8">Type Glace</option>
                        <option value="9">Type Insecte</option>
                        <option value="10">Type Normal</option>
                        <option value="11">Type Plante</option>
                        <option value="12">Type Poison</option>
                        <option value="13">Type Psy</option>
                        <option value="14">Type Roche</option>
                        <option value="15">Type Sol</option>
                        <option value="16">Type Spectre</option>
                        <option value="17">Type Ténébres</option>
                        <option value="18">Type Vol</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="order" className="sr-only">Génération</label>

                    <select name="order" id="order">
                        <option value="">Numéro Croissant</option>
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