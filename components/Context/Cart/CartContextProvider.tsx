"use client";

import { useContext, createContext, useReducer } from "react";
import { CartContext, CartDispatchContext } from "./CartContext";
import CartReducer from "./CartReducer";

const CartContextProvider = ({ children }) => {
    const initialCart = {
        cartItems: [],
        totalCost: 0,
    };

    const [state, dispatch] = useReducer(CartReducer, initialCart);

    return (
        <CartContext.Provider value={state}>
            <CartDispatchContext.Provider value={dispatch}>
                {children}
            </CartDispatchContext.Provider>
        </CartContext.Provider>
    );
};

export default CartContextProvider;
