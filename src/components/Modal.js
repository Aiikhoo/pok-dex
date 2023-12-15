import React, {Fragment, useContext} from "react";
import {Dialog, Transition} from "@headlessui/react";
import {ModalContext} from "../contextes/ModalContext";
import {TypeContext} from "../contextes/TypesContext";
import {PokemonContext} from "../contextes/PokemonsContext";
import {useTranslation} from "react-i18next";

export default function Modal() {
    const { isOpen, closeModal, openModal, pokemonsModal, setPokemons } = useContext(ModalContext);
    const { pokemonsFullList } = useContext(PokemonContext);
    const { typesList } = useContext(TypeContext);

    const { t, i18n } = useTranslation();


    const handleChangeModal = (pokemon) => {
        closeModal();
        setPokemons(pokemon);
        openModal();
    };

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-20" onClose={closeModal}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black/75" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel
                                className="w-full max-w-md lg:max-w-3xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                <div className="flex justify-end">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="12"
                                         viewBox="0 0 384 512" onClick={closeModal}>
                                        <path
                                            d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                                    </svg>
                                </div>
                                <Dialog.Title as="div" className="grid grid-cols-3 items-center">
                                    <p className="text-sm lg:text-xl text-center">N°{String(pokemonsModal.id).padStart(4, '0')}</p>
                                    <p className={"text-xl lg:text-4xl text-center"}>{pokemonsModal.name?.[i18n.language]}</p>
                                    <p className={"text-sm lg:text-xl text-center"}>Gen {pokemonsModal.generation}</p>
                                </Dialog.Title>
                                <div className={"grid grid-cols-3 items-center"}>
                                    <div className="flex my-2 gap-2 justify-center">
                                        {
                                            pokemonsModal.types && typesList.filter(type => pokemonsModal.types.includes(type.id))
                                                .map(type => (
                                                    <img key={"ModalType-" + type.name[i18n.language]} src={type.image} alt={type.name[i18n.language]}
                                                         className={"overflow-hidden h-7 w-7 lg:h-10 lg:w-10 rounded-full"}/>
                                                ))
                                        }
                                    </div>
                                    <div className="flex flex-col overflow-hidden bg-clip-border group">
                                        <img src={pokemonsModal.image ? pokemonsModal.image : ''} alt={pokemonsModal.name ? pokemonsModal.name[i18n.language] : ''} className={"block group-hover:hidden"}/>
                                        <img src={pokemonsModal.image_shiny ? pokemonsModal.image_shiny : ''} alt={pokemonsModal.name ? pokemonsModal.name[i18n.language] : ''} className={"hidden group-hover:block"}/>
                                        <div className={"flex flex-row gap-2 justify-center"}>
                                            <div className={"flex flex-row gap-1 items-center"}>
                                                <svg xmlns="http://www.w3.org/2000/svg" height="16"
                                                     width="10"
                                                     viewBox="0 0 320 512">
                                                    <path
                                                        d="M182.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L128 109.3V402.7L86.6 361.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0l96-96c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 402.7V109.3l41.4 41.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-96-96z"/>
                                                </svg>
                                                <p className="text-sm lg:text-xl text-gray-500">{pokemonsModal.height} m</p>
                                            </div>
                                            <div className={"flex flex-row gap-1 items-center"}>
                                                <svg xmlns="http://www.w3.org/2000/svg" height="16"
                                                     width="16"
                                                     viewBox="0 0 512 512">
                                                    <path
                                                        d="M224 96a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm122.5 32c3.5-10 5.5-20.8 5.5-32c0-53-43-96-96-96s-96 43-96 96c0 11.2 1.9 22 5.5 32H120c-22 0-41.2 15-46.6 36.4l-72 288c-3.6 14.3-.4 29.5 8.7 41.2S33.2 512 48 512H464c14.8 0 28.7-6.8 37.8-18.5s12.3-26.8 8.7-41.2l-72-288C433.2 143 414 128 392 128H346.5z"/>
                                                </svg>
                                                <p className="text-sm lg:text-xl text-gray-500">{pokemonsModal.weight} Kg</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={"flex flex-col gap-2 items-center"}>
                                        <p className="text-sm lg:text-xl text-gray-500">{t("attaque")}: {pokemonsModal.stats?.atk}</p>
                                        <p className="text-sm lg:text-xl text-gray-500">{t("defense")}: {pokemonsModal.stats?.def}</p>
                                        <p className="text-sm lg:text-xl text-gray-500">{t("pdv")}: {pokemonsModal.stats?.hp}</p>
                                        <p className="text-sm lg:text-xl text-gray-500">{t("attaque_spe")}: {pokemonsModal.stats?.spe_atk}</p>
                                        <p className="text-sm lg:text-xl text-gray-500">{t("defense_spe")}: {pokemonsModal.stats?.spe_def}</p>
                                        <p className="text-sm lg:text-xl text-gray-500">{t("vitesse")}: {pokemonsModal.stats?.vit}</p>
                                    </div>
                                </div>
                                <div className={"flex flex-col flex-wrap justify-center items-center"}>
                                    {pokemonsModal["evolvedFrom"] && Object.entries(pokemonsModal["evolvedFrom"]).length !== 0 ? (
                                        <>
                                            {Object.entries(pokemonsModal["evolvedFrom"]).map(([key, value]) => (
                                                <div
                                                    className={"flex flex-row items-center overflow-hidden bg-clip-border mt-2"}
                                                    key={"evolvedFrom-" + key}
                                                >
                                                    <button
                                                        onClick={() => handleChangeModal(pokemonsFullList.find(x => x.id === parseInt(key)))}
                                                        aria-label={`Voir les détails du pokemon`}
                                                        className={"group"}>
                                                        <img
                                                            src={pokemonsFullList.find(x => x.id === parseInt(key)).image}
                                                            alt={pokemonsFullList.find(x => x.id === parseInt(key)).name[i18n.language]}
                                                            className={"block group-hover:hidden w-16 lg:w-32 border border-black rounded-full"}/>
                                                        <img
                                                            src={pokemonsFullList.find(x => x.id === parseInt(key)).image_shiny}
                                                            alt={pokemonsFullList.find(x => x.id === parseInt(key)).name[i18n.language]}
                                                            className={"hidden group-hover:block w-16 lg:w-32 border border-black rounded-full"}/>
                                                    </button>
                                                    <div className={"flex flex-col items-center"}>
                                                        <svg xmlns="http://www.w3.org/2000/svg"
                                                             viewBox="0 0 24 24" fill="none"
                                                             stroke="currentColor" strokeWidth="2"
                                                             strokeLinecap="round"
                                                             strokeLinejoin="round"
                                                             className={"w-6 h-6"}>
                                                            <path d="M5 12h14"></path>
                                                            <path d="M12 5l7 7-7 7"></path>
                                                        </svg>
                                                        <p className={"text-center text-xs"}>
                                                            {value}
                                                        </p>
                                                    </div>
                                                    <div
                                                        className={"overflow-hidden bg-clip-border group mt-2"}>
                                                        <img
                                                            src={pokemonsModal.image ? pokemonsModal.image : ''}
                                                            alt={pokemonsModal.name ? pokemonsModal.name[i18n.language] : ''}
                                                            className={"block group-hover:hidden w-16 lg:w-32 border border-black rounded-full"}/>
                                                        <img
                                                            src={pokemonsModal.image_shiny ? pokemonsModal.image_shiny : ''}
                                                            alt={pokemonsModal.name ? pokemonsModal.name[i18n.language] : ''}
                                                            className={"hidden group-hover:block w-16 lg:w-32 border border-black rounded-full"}/>
                                                    </div>
                                                </div>
                                            ))}
                                        </>
                                    ) : null}
                                    {pokemonsModal["evolvesTo"] && Object.entries(pokemonsModal["evolvesTo"]).length !== 0 ? (
                                        <>
                                            {Object.entries(pokemonsModal["evolvesTo"]).map(([key, value]) => (
                                                <div
                                                    className={"flex flex-row items-center overflow-hidden bg-clip-border mt-2"}
                                                    key={"evolvesTo-" + key}
                                                >
                                                    <div
                                                        aria-label={`Voir les détails du pokemon`}
                                                        className={"group"}>
                                                        <img
                                                            src={pokemonsModal.image ? pokemonsModal.image : ''}
                                                            alt={pokemonsModal.name ? pokemonsModal.name[i18n.language] : ''}
                                                            className={"block group-hover:hidden w-16 lg:w-32 border border-black rounded-full"}/>
                                                        <img
                                                            src={pokemonsModal.image_shiny ? pokemonsModal.image_shiny : ''}
                                                            alt={pokemonsModal.name ? pokemonsModal.name[i18n.language] : ''}
                                                            className={"hidden group-hover:block w-16 lg:w-32 border border-black rounded-full"}/>
                                                    </div>
                                                    <div className={"flex flex-col items-center"}>
                                                        <svg xmlns="http://www.w3.org/2000/svg"
                                                             viewBox="0 0 24 24" fill="none"
                                                             stroke="currentColor" strokeWidth="2"
                                                             strokeLinecap="round"
                                                             strokeLinejoin="round"
                                                             className={"w-6 h-6"}>
                                                            <path d="M5 12h14"></path>
                                                            <path d="M12 5l7 7-7 7"></path>
                                                        </svg>
                                                        <p className={"text-center text-xs"}>
                                                            {value}
                                                        </p>
                                                    </div>
                                                    <button
                                                        className={"overflow-hidden bg-clip-border group mt-2"}
                                                        onClick={() => handleChangeModal(pokemonsFullList.find(x => x.id === parseInt(key)))}>
                                                        <img
                                                            src={pokemonsFullList.find(x => x.id === parseInt(key)).image}
                                                            alt={pokemonsFullList.find(x => x.id === parseInt(key)).name[i18n.language]}
                                                            className={"block group-hover:hidden w-16 lg:w-32 border border-black rounded-full"}/>
                                                        <img
                                                            src={pokemonsFullList.find(x => x.id === parseInt(key)).image_shiny}
                                                            alt={pokemonsFullList.find(x => x.id === parseInt(key)).name[i18n.language]}
                                                            className={"hidden group-hover:block w-16 lg:w-32 border border-black rounded-full"}/>
                                                    </button>
                                                </div>
                                            ))}
                                        </>
                                    ) : null}
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
}