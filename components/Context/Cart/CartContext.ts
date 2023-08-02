"use client";

import { createContext } from "react";
import { CartState } from "./CartTypes";

export const initialCart = {
    cartItems: [],
    totalCost: 0,
};

export const CartContext = createContext<{
    state: CartState;
    dispatch: React.Dispatch<any>;
}>({
    state: initialCart,
    dispatch: () => {},
});
export const CartDispatchContext = createContext(null);
