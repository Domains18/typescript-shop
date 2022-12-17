import { useShoppingCart } from '../Context/LogicContext'
import storeData from '../Data/index.json';
import { Stack } from 'react-bootstrap';
import { CurrencyFormat } from '../Utilities/CurrencyFomat';
import { Button } from 'react-bootstrap';
type CartItemProps = {
    id: number;
    quantity: number;
}


export function CartItem({ id, quantity }: CartItemProps) {
    const { removeItemQuantity } = useShoppingCart();

    // const itemArray = Object.values(StoreItem);
    // const item = itemArray.find(item => item.id === id);

    const item = storeData.find((i: { id: number; }) => i.id === id)

    if (item == null) return null;


    return (
        <Stack direction='horizontal' gap={2} className="d-flex align-items-center">
            <img src={item.imageUrl} alt="image" style={{ width: "125px", height: "75px", objectFit: "cover" }} />
            <div className="me-auto">
                <div>
                    {item.name} {quantity > 1 && <span className="text-muted" style={{ fontSize: ".65rem" }}> X {quantity}  </span>}
                </div>
                <div className="text-muted" style={{ fontSize: ".75rem" }}>
                    {CurrencyFormat(item.price)}
                </div>
            </div>
            <div>{CurrencyFormat(item.price * quantity)}</div>
            <Button variant='danger' size='sm' onClick={() => removeItemQuantity(id)}>Remove</Button>
        </Stack>
    )
}