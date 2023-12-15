export default function Home() {
    return (
        <div className={"mt-20"}>
            <div className={"flex flex-row gap-2 flex-wrap justify-between px-2"}>
                <div>
                    //todo select generation
                </div>
                <div>
                    //todo select type
                </div>
                <div>
                    //todo select order
                </div>
            </div>
            <Modal/>
            <div className={"grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 mt-2"}>
                //todo mappé la liste de pokemon
            </div>
        </div>
    )
}