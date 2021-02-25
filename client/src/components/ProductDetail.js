import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {Link, link, navigate} from '@reach/router';

const ProductDetail = (props) => {
    const [allProducts, setAllProducts] = useState([]);
    const [product, setProduct] = useState({});
    const [loaded, setLoaded] = useState([]);
    const { removeFromDom } = props;
    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + props.id) // works fine
            .then((res) => {
                console.log('This is so awesome' + res.data);
                setProduct(res.data)
                setLoaded(true);
            })
            .catch(err=>console.log('something is errored out' + err))
    }, [])
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
            navigate(`/products/`); // go back to products after deleting from the ProductDetail Page. 
        });
    }
    return (
        <div className="form-wrapper">
            <div className="form-wrapper">
                <h2>Product Description</h2>
                <div>
                        <span className="newLine"><em>Title:</em> {product.title}</span> 
                        <span className="newLine"><em>Price:</em> {product.price}</span> 
                        <span className="newLine"><em>Description:</em> {product.description}</span>
                </div>
                <button className="myButton" onClick={() => navigate(`/products/`)}>
                    Back to Products
                </button>
                <Link className="linkButton" to={"/products/" + props.id + "/edit"}>
                    Edit
                </Link>
                <button type="button" className="myButton" 
                            onClick={() => { if (window.confirm('Are you sure you wish to delete this Product?')) deleteProduct(product._id) } } >Delete Product</button>
            </div>
        </div>
    )
}
export default ProductDetail;