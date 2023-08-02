import InlineButton from "@/components/common/InlineButton";
import { USDollar } from "@/utils/currencyUtils";
import { useContext } from "react";
import { CartContext } from "../Context/Cart/CartContext";

const CardItem = (props: { name: string; unitCost: number }) => {
    const { name, unitCost } = props;
    const { dispatch } = useContext(CartContext);

    const handleIncrease = () => {
        dispatch({
            type: "ADD_TO_CART",
            payload: { name: name, unitCost: unitCost, amount: 1 },
        });
    };

    return (
        <div className="justify-between flex">
            <div className="truncate mr-5">{name}</div>
            <div className="flex space-x-3">
                <div>{USDollar.format(unitCost)}</div>
                {/* TODO: Make + button add to buy list */}
                <InlineButton onClick={handleIncrease} text="+" />
            </div>
        </div>
    );
};

export default CardItem;
