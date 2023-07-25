"use client";

import InlineButton from "@/components/common/InlineButton";
import { USDollar } from "@/utils/currencyUtils";
import BigButton from "../common/BigButton";
import { CartContext, CartDispatchContext } from "../Context/Cart/CartContext";
import { useContext } from "react";
import { Card } from "../Context/Cart/CartTypes";

const CartPane = (props: {}) => {
    const { cartItems, totalCost } = useContext(CartContext);
    const dispatch = useContext(CartDispatchContext);

    const handleClearClick = () => {
        dispatch({
            type: "CLEAR",
        });
    };

    const CartItemRow = (props: {
        amount: number;
        name: string;
        unitCost: number;
    }) => {
        const { amount, name, unitCost } = props;
        const dispatch = useContext(CartDispatchContext);

        const handleIncrease = () => {
            dispatch({
                type: "ADD_TO_CART",
                payload: { name: name, unitCost: unitCost, amount: amount },
            });
        };

        const handleDecrease = () => {
            dispatch({
                type: "DECREASE",
                payload: { name: name, unitCost: unitCost, amount: amount },
            });
        };

        const handleRemove = () => {
            dispatch({
                type: "REMOVE_ITEM",
                payload: { name: name, unitCost: unitCost, amount: amount },
            });
        };

        return (
            <tr>
                <td className="space-x-2 inline-flex">
                    <InlineButton onClick={handleDecrease} text="-" />
                    <p>{`${amount}x`}</p>
                    <InlineButton onClick={handleIncrease} text="+" />
                </td>
                <td>{name}</td>
                <td>{USDollar.format(amount * unitCost)}</td>
                <td>
                    <InlineButton
                        onClick={handleRemove}
                        text="X"
                    ></InlineButton>
                </td>
            </tr>
        );
    };

    return (
        <div className="bg-kaiba-blue-400 p-3 rounded space-x-3">
            <table className="table-auto">
                <thead>
                    <tr>
                        <th>Amount</th>
                        <th>Name</th>
                        <th>Cost</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {cartItems.map((cartItem: Card) => {
                        return (
                            <CartItemRow
                                key={cartItem.name}
                                amount={cartItem.amount}
                                name={cartItem.name}
                                unitCost={cartItem.unitCost}
                            />
                        );
                    })}
                    <tr>
                        <td></td>
                        <td></td>
                        <td>Total Cost</td>
                        <td>{USDollar.format(totalCost)}</td>
                    </tr>
                </tbody>
            </table>
            <div className="justify-items-end">
                <BigButton text="Confirm Purchase" />
                <BigButton onClick={handleClearClick} text="Clear Cart" />
            </div>
        </div>
    );
};

export default CartPane;
