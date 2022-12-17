import { Offcanvas, Stack } from "react-bootstrap"
import { useShoppingCart } from "../Context/LogicContext"
import { CartItem } from "./CartItem";
import { CurrencyFormat } from "../Utilities/CurrencyFomat";
import storeData from '../Data/index.json';


type ShoppingCartProps = {
    isOpen: boolean;
}

type StoreItems = { id: number, name: string, price: number, imageUrl: string }

let isOpen: boolean = false;
export function ShoppingCart({ isOpen }: ShoppingCartProps): JSX.Element {

    const { closeCart, cartItems } = useShoppingCart();
    // console.log(cartItems);
    return (
        <Offcanvas show={isOpen} onHide={closeCart}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Cart</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Stack gap={3}>
                    {cartItems.map(item => <CartItem key={item.id} {...item} />)}
                    <div className="ms-auto fw-bold fs-5">
                        Total{" "}
                        {CurrencyFormat( cartItems.reduce((total, cartItem) => {
                            const item : { id: number, name: string, price: number, imageUrl: string } = storeData.find((item: StoreItems) => item.id === cartItem.id) as StoreItems;
                            return total + (item?.price) || 0 * cartItem.quantity;
                        } , 0))}
                    </div>
                </Stack>
            </Offcanvas.Body>
        </Offcanvas>
    )
}