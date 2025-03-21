import React, { useEffect } from 'react'
import axios from "axios";
import { useSelector } from 'react-redux';
import ProductComponent from './ProductComponent';
import { setProducts } from '../redux/actions/productActions';
import(setProducts)
const ProductListing = () => {
    const products = useSelector((state) => state);
    const dispatch = useDispatch();

    const fetchProducts = async () => {
        const response = await axios.get("http://fakestoreapi.com/products").catch((err) => {
            console.log("Err", err);

        });
        dispatch(setProducts(response.data));
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    console.log("Products:", products);
    return (
        <div className='ui grid container'>
            <ProductComponent />

        </div>
    )
}

export default ProductListing