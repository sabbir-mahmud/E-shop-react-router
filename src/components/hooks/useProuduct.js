// Product Data Hooks
import { useState, useEffect } from 'react';

const useProduct = () => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(res => res.json())
            .then(data => {
                setProduct(data.data);
            });
    }, []);

    return [product, setProduct];
}

export default useProduct;