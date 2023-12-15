import {useContext} from "react";
import {TypeContext} from "../contextes/TypesContext";
import {ModalContext} from "../contextes/ModalContext";
import {useTranslation} from "react-i18next";

export default function Card(props) {
    const { pokemon } = props;

    const {typesList} = useContext(TypeContext);
    const {openModal, setPokemons} = useContext(ModalContext);

    const formattedId = String(pokemon['id']).padStart(4, '0');

    const { t, i18n } = useTranslation();

    const handleInfo = () => {
        openModal();
        setPokemons(pokemon);
    }

    return (
        <div className="flex flex-col bg-gray-300 rounded-xl text-xs md:text-base lg:text-lg xl:text-xl">
            <div className="flex justify-end my-1 mr-1" onClick={handleInfo}>
                <svg className={'bg-white w-4 h-4 p-0.5 md:w-6 md:h-6 md:p-1 rounded-full'} xmlns="http://www.w3.org/2000/svg" height="16" width="6" viewBox="0 0 192 512">
                    <path d="M48 80a48 48 0 1 1 96 0A48 48 0 1 1 48 80zM0 224c0-17.7 14.3-32 32-32H96c17.7 0 32 14.3 32 32V448h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H64V256H32c-17.7 0-32-14.3-32-32z"/>
                </svg>
            </div>
            <div className="flex justify-center">
                <span className="border-white border-2 text-center text-red-600 font-bold rounded p-1">
                    N°{formattedId}
                </span>
            </div>
            <div>
                <p className="mt-2 text-center font-semibold leading-snug tracking-normal">
                    {pokemon.name[i18n.language]}
                </p>
            </div>
            <div className="relative overflow-hidden text-gray-700 rounded-xl bg-clip-border group">
                <img src={pokemon.image} alt={pokemon.name[i18n.language]} className={"block group-hover:hidden"} />
                <img src={pokemon.image_shiny} alt={pokemon.name[i18n.language]} className={"hidden group-hover:block"} />
            </div>
            <div className="text-center">
                <p className="mt-2 text-center font-semibold leading-snug tracking-normal">
                    {t("gen")} {pokemon.generation}
                </p>
            </div>
            <div className="flex justify-center my-2 gap-2">
                {
                    typesList.filter(type => pokemon.types.includes(type.id))
                        .map(type => (
                            <img src={type.image} alt={type.name[i18n.language]} className={"overflow-hidden h-5 w-5 md:h-7 md:w-7 lg:h-10 lg:w-10 rounded-full"}/>
                        ))
                }
            </div>
        </div>
    );
}