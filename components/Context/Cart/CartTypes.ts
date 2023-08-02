export type Card = {
    amount: number;
    name: string;
    unitCost: number;
};

export type CartState = {
    cartItems: Card[];
    totalCost: number;
};

type ActionMap<M extends { [index: string]: any }> = {
    [Key in keyof M]: M[Key] extends undefined
        ? { type: Key }
        : { type: Key; payload: M[Key] };
};
