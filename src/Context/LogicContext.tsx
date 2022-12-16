import React, { createContext, useContext, useState, ReactNode } from 'react';

const ShoppingCartContext = createContext({

})
type shoppingCartProviderProps = {
    children: ReactNode;
};
//cart logic
type shoppingCartContext = {
    getItemQuantity: (id: number) => number;
    increaseItemQuantity: (id: number) => void;
    decreaseItemQuantity: (id: number) => void;
}
export function useShoppingCart(){
    return useContext(ShoppingCartContext);
}


export function shoppingCartProvider({ children }: shoppingCartProviderProps){
    return (
        <ShoppingCartContext.Provider value={{}}>
            {children}
        </ShoppingCartContext.Provider>
    )
}