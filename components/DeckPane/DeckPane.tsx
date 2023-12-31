import GridListSwitch from "@/components/DeckPane/GridListSwitch";
import BigButton from "@/components/common/BigButton";

const DeckPane = (props: {}) => {
    const CardInDeck = (props: { name: string }) => {
        return (
            <span className="bg-kaiba-grey-500 p-5 m-5 rounded">
                {props.name}
            </span>
        );
    };

    // TODO: Hook in real db data
    const cardsInDeck = [
        "Dark Magician",
        "Pot of Greed",
        "Blue Eyes White Dragon",
        "Your Mom",
    ];

    return (
        <div className="bg-kaiba-blue-800 flex-auto rounded p-5 border-4 border-kaiba-blue-500">
            <div className="flex justify-between">
                <div className="font-bold mb-2 py-2">Deck List</div>
                {/* TODO: Make grid list switch functional */}
                <GridListSwitch />
            </div>
            <div className="grid grid-flow-col-dense grid-cols-10 gap-4 place-items-center">
                {cardsInDeck.map((name, index) => {
                    {
                        /* TODO: Make this a proper card */
                    }
                    return <CardInDeck name={name} key={index} />;
                })}
            </div>
            <div className="flex space-x-10">
                {/* TODO: Make these buttons work */}
                <BigButton text="Download .ydk" />
                <BigButton text="Copy Decklist" />
            </div>
        </div>
    );
};

export default DeckPane;
