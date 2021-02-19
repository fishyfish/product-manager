import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

const Main = () => {
    const[product, setProduct] = useState([]);
    const[loaded, setLoaded] = useState([]);
    useState(() => {
        axios.get('http://localhost:8000/api/products')
        .then(res=>{
            setProduct(res.data);
            setLoaded(true);
        });

    }, [])
    return (
        <div className="form-wrapper">
            <div className="add-me"></div>
            <ProductForm/>
        
            <div id="results">
                <h2>List of Products </h2>
                    {loaded && <ProductList product={product}/>}
            </div>
        </div>
    )
}
export default Main;