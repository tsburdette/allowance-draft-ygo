import {
    ADD_TO_CART,
    DECREASE,
    REMOVE_ITEM,
    CLEAR,
    CHECKOUT,
} from "@/components/Context/Cart/CartOperationTypes";
import { Card, CartState } from "./CartTypes";

// function for calculating total cost of cart
export const sumItemsCost = (cartItems: Card[]) => {
    let total = cartItems
        .reduce(
            (total, product) => total + product.unitCost * product.amount,
            0
        )
        .toFixed(2);
    return total;
};

export const sortCart = (cartItems: Card[]) => {
    return cartItems.sort((a, b) => {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();

        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        return 0;
    });
};

const CartReducer = (cartState: any, action: any) => {
    const indexOfItem = cartState.cartItems.findIndex(
        (item: any) => item.name === action.payload?.name
    );

    switch (action.type) {
        case ADD_TO_CART:
            if (indexOfItem === -1) {
                cartState.cartItems.push({
                    ...action.payload,
                });
            } else {
                cartState.cartItems[indexOfItem].amount++;
            }

            return {
                ...cartState,
                cartItems: [...sortCart(cartState.cartItems)],
                totalCost: sumItemsCost(cartState.cartItems),
            };

        case DECREASE:
            if (indexOfItem >= 0) {
                cartState.cartItems[indexOfItem].amount--;
                if (cartState.cartItems[indexOfItem].amount < 1) {
                    cartState.cartItems.splice(indexOfItem, 1);
                }
            }

            return {
                ...cartState,
                cartItems: [...cartState.cartItems],
                totalCost: sumItemsCost(cartState.cartItems),
            };

        case REMOVE_ITEM:
            if (indexOfItem >= 0) {
                cartState.cartItems.splice(indexOfItem, 1);
            }

            return {
                ...cartState,
                cartItems: [...cartState.cartItems],
                totalCost: sumItemsCost(cartState.cartItems),
            };

        case CLEAR:
            return { ...cartState, cartItems: [], totalCost: sumItemsCost([]) };

        case CHECKOUT:

        default:
            return cartState;
    }
};

export default CartReducer;
