import DeckPane from "@/components/DeckPane/DeckPane";
import CollectionPane from "@/components/CollectionPane/CollectionPane";

const DeckBuilderPane = (props: {}) => {
    return (
        <div className="bg-kaiba-blue-400 min-h-fit p-3 rounded flex space-x-3">
            <CollectionPane />
            <DeckPane />
        </div>
    );
};

export default DeckBuilderPane;
