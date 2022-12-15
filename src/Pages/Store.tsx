import React from 'react';
import storeData from '../Data/index.json';
import { Col, Row } from 'react-bootstrap';
import { StoreItem } from '../Components/StoreItem';
export function Store() {
    console.log(storeData)
    return (
        <>
            <h1>Store</h1>
            <Row>
                {storeData.map((item) => (
                    <Col md={4} key={item.id}>
                        <StoreItem
                            {...item}
                        />
                    </Col>
                ))}
            </Row>
        </>
    )
}