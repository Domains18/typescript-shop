import { CurrencyFormat } from '../Utilities/CurrencyFomat';
import { Card, Button } from 'react-bootstrap';
import { useShoppingCart } from '../Context/LogicContext';
type StoreItemProps = {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
}

export function StoreItem({ id, name, price, imageUrl }: StoreItemProps): JSX.Element {
    const { getItemQuantity, addItemQuantity, removeItemQuantity, clearCart} = useShoppingCart();
    const quantity = getItemQuantity(id);
     return (
        <Card className='h-100'>
            <Card.Img variant="top" src={imageUrl} height="200px" style={{ objectFit: "cover" }} />
            <Card.Body className='d-flex flex-column'>
                <Card.Title className='d-flex' justify-content-between align-items-baseline mb-4>
                    <span className="fs-2">{name}</span>
                    <span className="ms-2 text-muted">{CurrencyFormat(price)}</span>
                </Card.Title>
                <div className="mt-auto">
                    {quantity === 0 ? (
                         <Button className="w-100" onClick={() => addItemQuantity(id)}>Add to Cart</Button>) :
                        <div className='d-flex align-items-center flex-column' style={{ gap: ".5rem" }}>
                            <div className='d-flex align-items-center justify-content-center' style={{ gap: ".5rem" }}>
                                 <Button onClick={() => addItemQuantity(id)}>+</Button>
                                <div>
                                    <span>{quantity}</span>
                                    in cart
                                </div>
                                <Button onClick={()=> removeItemQuantity(id)}>-</Button>
                            </div>
                            <Button variant='danger' size='sm' onClick={()=> removeItemQuantity(id)}> Remove from Cart</Button>
                        </div>
                    }
                </div>
            </Card.Body>
        </Card>
    )
}
