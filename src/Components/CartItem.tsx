import { useShoppingCart } from '../Context/LogicContext'
import storeData from '../Data/index.json';
import { Stack } from 'react-bootstrap';

type CartItemProps = {
    id: number;
    quantity: number;
}


export function CartItem({ id, quantity }: CartItemProps) {
    const { removeItemQuantity } = useShoppingCart();

    // const itemArray = Object.values(StoreItem);
    // const item = itemArray.find(item => item.id === id);
    
    const item = storeData.find(( i: { id: number; }) => i.id === id )

    if (item == null) return null;


    return (
        <Stack direction='horizontal' gap={2}>
            <img src={item.imageUrl} alt="image" style={{ width: "125px", height: "75px", objectFit: "cover" }} />
        </Stack>
    )
}