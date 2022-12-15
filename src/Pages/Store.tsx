import React from 'react';
import storeData from '../Data/index.json';
import { Col, Row } from 'react-bootstrap';
import { StoreItem } from '../Components/StoreItem';
export function Store() {
    return (
        <>
            <h1>Store</h1>
            <Row>
                {storeData.map((item) => (
                    <Col md={4} key={item.id}>
                        <StoreItem
                            id={item.id}
                            name={item.name}
                            price={item.price}
                            imageUrl={item.imageUrl}
                        />
                    </Col>
                ))}
            </Row>
        </>
    )
}