import { Offcanvas, Stack } from "react-bootstrap"
import { useShoppingCart } from "../Context/LogicContext"
 

type ShoppingCartProps = {
    isOpen: boolean;
}

let isOpen: boolean = false;
export function ShoppingCart ({isOpen} :ShoppingCartProps ) : JSX.Element{

    const { closeCart} = useShoppingCart()
    return (
    <Offcanvas show={isOpen} onHide={closeCart}>
        <Offcanvas.Header closeButton>
            <Offcanvas.Title>Cart</Offcanvas.Title>
            <Offcanvas.Body>
                <Stack gap={3}>
                    
                </Stack>
            </Offcanvas.Body>
        </Offcanvas.Header>

    </Offcanvas>
    )
}