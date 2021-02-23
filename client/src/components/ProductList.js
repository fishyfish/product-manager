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
        axios.get('http://localhost:8000/api/products') // this totally works
        .then((res) => {
            console.log(res.data);
            setAllProducts(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
    }, []);

    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/products/' + productId)
            .then(res => {
                console.log("I think I removed this product id." + productId)
                removeFromDom(productId)
            })
    }

    const onDelete = (e) => { 
        axios.delete('http://localhost:8000/api/products/' + product._id)   
        .then(res => {
            console.log(res + "was removed, I think");
            removeFromDom(product._id);
        })
        .catch(err=>console.log(err))
    };

    return (
        <div>
            <ol>
                {/* getting all products */}
                {props.product.map((product, idx)=>{
                    return <li key={idx}> 
                        <span className="newLine"><em>Title:</em> {product.title}</span>
                            <span className="newLine"><em>ID:</em> {product._id}</span>
                            <div className="align-right">
                                <button className="myButton" onClick={() => navigate(`/products/${product._id}`)}>
                                    View Product
                                </button>
                        
                            {/* delete is not working */}
                            <button className="myButton" onClick={(e)=>{onDelete(product._id)}}>
                                Delete
                            </button>
                            <button className="myButton" onClick={(e)=>{deleteProduct(product._id)}}>
                                Delete2
                            </button>

                           {/* This bloody works all by itself. But I've yet to get it to work inside of the function above. */}
                            <button className="myButton" onClick={(e)=>{removeFromDom(product._id)}}>
                                No Dom
                            </button>

                            {/* <Link className="linkButton" to={"/products/" + product._id + "/edit"}>
                                Edit 
                            </Link> */}
                    </div>
                    </li>
                })}
            </ol>
        </div>
    )
}

{/* <ProductDetail path="/products/:id" /> */}
export default ProductList;