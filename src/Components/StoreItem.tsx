type StoreItemProps = {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
}

import { Card } from 'react-bootstrap';

export function StoreItem({id, name, price, imageUrl} : StoreItemProps ) : JSX.Element {
    // console.log(imageUrl)
    return (
    <Card.Img variant="top" src={imageUrl} height="200px" style={{ objectFit: "cover" }} />
    )
}
