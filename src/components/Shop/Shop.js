import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Cart from '../Cart/Cart';
import { addToDb, useCarts } from '../hooks/useCart';
import useProduct from '../hooks/useProuduct';
import Product from './Products/Product';
import './Shop.css';

const Shop = () => {
    const [product, setProduct] = useProduct();
    const [carts, setCarts] = useCarts(product);
    const addToCart = (product) => {
        setCarts([...carts, product]);
        addToDb('carts', product.slug);
    }
    return (
        <Container>
            <div className="shop-container">
                <Row xs={1} md={3} className="g-4 my-5">
                    {
                        product.map(item => <Product
                            key={item.slug}
                            item={item}
                            addToCart={addToCart}
                        ></Product>)

                    }
                </Row>
                <div className="cart-container">
                    <Cart carts={carts}></Cart>
                </div>
            </div>
        </Container>
    );
};

export default Shop;