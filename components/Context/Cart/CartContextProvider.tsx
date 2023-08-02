"use client";

import { useReducer } from "react";
import { CartContext, initialCart } from "./CartContext";
import CartReducer from "./CartReducer";

const CartContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(CartReducer, initialCart);

    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;
