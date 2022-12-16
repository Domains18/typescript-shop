import { Offcanvas, Stack } from "react-bootstrap"
import { useShoppingCart } from "../Context/LogicContext"
import { CartItem } from "./CartItem";


type ShoppingCartProps = {
    isOpen: boolean;
}

let isOpen: boolean = false;
export function ShoppingCart({ isOpen }: ShoppingCartProps): JSX.Element {

    const { closeCart, cartItems } = useShoppingCart();
    // console.log(cartItems);
    return (
        <Offcanvas show={isOpen} onHide={closeCart}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Cart</Offcanvas.Title>
                <Offcanvas.Body>
                    <Stack gap={3}>
                        {cartItems.map(item => <CartItem key={item.id} {...item} />)}
                    </Stack>
                </Offcanvas.Body>
            </Offcanvas.Header>

        </Offcanvas>
    )
}