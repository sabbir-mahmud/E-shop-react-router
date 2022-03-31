import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useProduct from '../hooks/useProuduct';
import Product from './Products/Product';

const Shop = () => {
    const [product, setProduct] = useProduct();
    console.log(product);
    return (
        <Container>
            <Row xs={1} md={3} className="g-4 my-5">
                {
                    product.map(item => <Product
                        key={item.slug}
                        item={item}
                    ></Product>)

                }
            </Row>
        </Container>
    );
};

export default Shop;