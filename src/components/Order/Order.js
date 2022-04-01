import React from 'react';
import { useCarts } from '../hooks/useCart';
import useProduct from '../hooks/useProuduct';

const Order = () => {
    const [product, setProduct] = useProduct();
    const [carts, setCarts] = useCarts(product);
    console.log(carts);
    return (
        <div>
            <h3>This is order {carts.length}</h3>
            {
                carts.map(item => <div key={item.slug}>{item.brand} {item.slug}</div>)
            }

        </div>
    );
};

export default Order;