import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Product = ({ item, addToCart }) => {
    let navigate = useNavigate();
    const handleClick = () => {
        navigate(`/shop/${item.slug}`);
    }

    const { brand, phone_name, image } = item;
    return (
        <div>
            <Col>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                        <Card.Title><Button variant="link" onClick={handleClick} >{phone_name}</Button></Card.Title>
                        <Card.Title>{brand}</Card.Title>
                        <Button onClick={() => addToCart(item)} variant="primary">Add to Cart</Button>
                    </Card.Body>
                </Card>
            </Col>

        </div>
    );
};

export default Product;