import React, {useEffect, useState } from 'react';
import axios from 'axios';
import {Link, link, navigate} from '@reach/router';

const ProductList = (props) => {
    const [allProducts, setAllProducts] = useState([]);
    const [product, setProduct] = useState({})
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [loaded, setLoaded] = useState([]);
    const { removeFromDom } = props;
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/products/') // this totally works
        .then((res) => {
            console.log(res.data);
            setAllProducts(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
    }, []);

    const deleteProduct = (productId) => {
        axios.delete("http://localhost:8000/api/products/" + productId)
        .then ((res) => {
            removeFromDom(productId);
            const deletedProduct = res.data;
            console.log(deletedProduct);
            const filteredProductsArray = allProducts.filter((skiff) => product._id !== productId);
            setAllProducts(filteredProductsArray);
        })
        .catch ((err) => {
            console.log(err);
        });
    }

    return (
        <div>
            <ol>
                {/* getting all products */}
                {props.product.map((product, idx)=>{
                    return <li key={idx}> 
                        <span className="newLine"><em>Title:</em> {product.title}</span>
                            <span className="newLine"><em>ID:</em> {product._id}</span>
                            <div className="align-right">
                                <button type="button" className="myButton" onClick={() => navigate(`/products/${product._id}`)}>
                                    View Product
                                </button>
                        
                            <button className="myButton" type="button" onClick={() => deleteProduct(product._id)}>Delete Product</button>
                    </div>
                    </li>
                })}
            </ol>
        </div>
    )
}

{/* <ProductDetail path="/products/:id" /> */}
export default ProductList;