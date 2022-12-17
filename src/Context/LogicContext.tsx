import { createContext, useContext, ReactNode, useState } from 'react';
import { ShoppingCart } from '../Components/ShoppingCart';
import { useStorageConcept } from '../Hooks/StorageConcept';
type ShoppingCartProviderProps = {
    children: ReactNode;
}
type ShoppingCartContext = {
    openCart: ()=> void;
    closeCart: () => void;
    getItemQuantity: (id: number) => number;
    addItemQuantity: (id: number) => void;
    removeItemQuantity: (id: number) => void;
    clearCart: (id: number) => void;
    cartQuantity: number;
    cartItems: cartItem[];
}
type cartItem = {
    id: number
    quantity: number
}
const ShoppingCartContext = createContext({} as ShoppingCartContext);

export function useShoppingCart() {
    return useContext(ShoppingCartContext);
}
export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
    const [ cartItems, setCartItems ] = useStorageConcept<cartItem[]>( "Shopping-cart", []);
    const cartQuantity = cartItems.reduce(( quantity, item) => quantity + item.quantity, 0);
    const [ isOpen, setIsOpen ] = useState(false);
    function getItemQuantity (id: number){
        return cartItems.find( item => item.id === id)?.quantity || 0;

    }

    const openCart = () => setIsOpen(true);
    const closeCart = () => setIsOpen(false);
 
    function addItemQuantity ( id: number){
        setCartItems(currentItems => {
            if(currentItems.find(item => item.id === id) ==null ){
                return [...currentItems, {id, quantity: 1 }]
            } else {
                return currentItems.map(item => {
                    if( item.id === id){
                        return {...item, quantity: item.quantity +1}
                    }
                    else{
                        return item
                    }
                });
            }
        });
    }
    function removeItemQuantity ( id: number){
        setCartItems(currentItems => {
            if(currentItems.find(item => item.id === id)?.quantity ===1  ){
                return currentItems.filter(item => item.id !== id)
            } else {
                return currentItems.map(item => {
                    if( item.id === id){
                        return {...item, quantity: item.quantity -1}
                    }
                    else{
                        return item
                    }
                });
            }
        });
    }

    function clearCart(id : number){
        setCartItems(currentItems =>{
            return currentItems.filter(item => item.id !== id)
        });
    }
    return (
        <ShoppingCartContext.Provider value={{ getItemQuantity, 
        addItemQuantity,
        removeItemQuantity,
        clearCart,
        openCart,
        closeCart,
        cartItems,
        cartQuantity
        }}>
            {children}
            <ShoppingCart isOpen={isOpen} />
        </ShoppingCartContext.Provider>
    )
}