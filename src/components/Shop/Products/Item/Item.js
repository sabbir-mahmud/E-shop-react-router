import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Item = () => {
    const { slug } = useParams();
    const [item, setItem] = useState({});
    useEffect(() => {
        fetch(`https://openapi.programming-hero.com/api/phone/${slug}`)
            .then(res => res.json())
            .then(data => setItem(data.data))
    }, [slug])
    console.log(item);
    return (
        <div>
            <h1>{item.brand}</h1>
            <img src={item.image} alt="" srcset="" />

        </div>
    );
};

export default Item;