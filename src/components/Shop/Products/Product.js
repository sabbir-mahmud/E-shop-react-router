import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const Product = ({ item }) => {
    const { brand, phone_name, image } = item;
    return (
        <div>
            <Col>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                        <Card.Title>{phone_name}</Card.Title>
                        <Card.Title>{brand}</Card.Title>
                        <Button variant="primary">Add to Cart</Button>
                    </Card.Body>
                </Card>
            </Col>

        </div>
    );
};

export default Product;