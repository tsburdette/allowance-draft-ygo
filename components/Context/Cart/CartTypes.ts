export type Card = {
    amount: number;
    name: string;
    unitCost: number;
};

export type CartState = {
    cartItems: Card[];
    checkout: boolean;
};
