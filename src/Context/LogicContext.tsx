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
    removeItem: (id: number) => void;
}
// cart items
type cartItem = {
    id: number;
    quantity: number;
}
export function useShoppingCart(){
    return useContext(ShoppingCartContext);
}


export function shoppingCartProvider({ children }: shoppingCartProviderProps){
    const [cartItems, setCartItems] = useState<cartItem[]>([]);

    function getItemQuantity( id: number) {
        const item = cartItems.find(item => item.id === id);
    }
    // get items and add to cart
    function increaseItemQuantity( id: number) {
        setCartItems( currentItems => {
            if(currentItems.find(item => item.id === id) == null){
                return [...currentItems, { id, quantity: 1 }];
            } else{
                return currentItems.map(item => {
                    if(item.id === id){
                        return { ...item, quantity: item.quantity + 1 };
                    } else{
                        return item;
                    }
                });
            };
        });
    }
    // decrease items from cart
    function decreaseItemQuantity( id: number) {
        
        setCartItems( currentItems => {
            const item = currentItems.find(item => item.id === id);
            if(item == null){
                return currentItems;
            } else if(item.quantity === 1){
                return currentItems.filter(item => item.id !== id);
            } else{
                return currentItems.map(item => {
                    if(item.id === id){
                        return { ...item, quantity: item.quantity - 1 };
                    } else{
                        return item;
                    }
                });
            };
        });
    };
    // remove items from cart
    function removeItem( id: number) {
        setCartItems( currentItems => {
            return currentItems.filter(item => item.id !== id);
        });
    }

    return (
        <ShoppingCartContext.Provider value={{getItemQuantity, increaseItemQuantity, decreaseItemQuantity, removeItem}}>
            {children}
        </ShoppingCartContext.Provider>
    )
}