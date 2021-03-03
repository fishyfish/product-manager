import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {Link, link, navigate} from '@reach/router';
import DeleteButton from './DeleteButton';

const ProductDetail = (props) => {
    const [allProducts, setAllProducts] = useState([]);
    const [product, setProduct] = useState({});
    const [products, setProducts] = useState({});
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
            const filteredProductsArray = allProducts.filter((product) => product._id !== productId);
            setAllProducts(filteredProductsArray);
        })
        .catch ((err) => {
            console.log(err);
            navigate(`/products/`); // go back to products after deleting from the ProductDetail Page. 
        });
        const removeFromDom = productId => {
            setProducts(products.filter(product => product._id != productId))
        }
    }
    return (
        <div className="form-wrapper">
            <h1 className="centerme white">Product Description</h1>
            <div className="form-wrapper">
                <div>
                        <span className="newLine break-word"><em>Title:</em> {product.title}</span> 
                        <span className="newLine break-word"><em>Price:</em> {product.price}</span> 
                        <span className="newLine break-word"><em>Description:</em> {product.description}</span>
                </div>
                <button className="myButton" onClick={() => navigate(`/products/`)}>
                    Back to Products
                </button>
                <Link className="linkButton" to={"/products/" + props.id + "/edit"}>
                    Edit
                </Link>
                <DeleteButton productId={product._id} successCallback={()=>removeFromDom(product._id)} />
            </div>
        </div>
    )
}
export default ProductDetail;