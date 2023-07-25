import SearchPane from "@/components/SearchPane/SearchPane";
import CartPane from "@/components/CartPane/CartPane";
import CartContextProvider from "./Context/Cart/CartContextProvider";

const DeckBuilderPane = (props: {}) => {
    return (
        <div className="bg-kaiba-blue-400 min-h-fit p-3 rounded flex space-x-3">
            <CartContextProvider>
                <SearchPane />
                <CartPane />
            </CartContextProvider>
        </div>
    );
};

export default DeckBuilderPane;
