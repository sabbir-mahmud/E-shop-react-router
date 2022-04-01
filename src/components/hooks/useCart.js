import { useState, useEffect } from "react";

// get the shopping cart from local storage
const getFromLocal = (item) => {
    let data = {};
    const storedData = localStorage.getItem(item);
    if (storedData) {
        data = JSON.parse(storedData);
    }
    return data;
}

// use local storage to manage cart data
const addToDb = (item, id) => {
    let data = {};

    //get the shopping cart from local storage
    let storedData = getFromLocal(item)
    if (storedData) {
        data = storedData;
    }

    // add quantity
    const quantity = data[id];
    if (quantity) {
        const newQuantity = quantity + 1;
        data[id] = newQuantity;
    }
    else {
        data[id] = 1;
    }
    localStorage.setItem(item, JSON.stringify(data));
}

//  Cart state
const useCarts = (products) => {
    const [carts, setCarts] = useState([]);
    useEffect(() => {
        const storedData = getFromLocal('carts');
        if (storedData) {
            const newCarts = products.filter(item => storedData[item.slug]);
            setCarts(newCarts);
        }

    }, [products])
    return [carts, setCarts]
}



export { useCarts, addToDb, getFromLocal };

