import React, {useEffect, useState } from 'react';
import axios from 'axios';
import {Link, link, navigate} from '@reach/router';

const ProductList = (props) => {
    const [allProducts, setAllProducts] = useState([]);
    const { removeFromDom } = props;
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/products') // this totally works
        .then((response) => {
            console.log(response.data);
            setAllProducts(response.data);
        })
        .catch((err) => {
            console.log(err);
        });
    }, []);
    const onDelete = e => {
        const {removeFromDom} = props;
        const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/products/' + props.id)   
            removeFromDom(props)
            
        .then(res => {
            console.log(res + "was removed, I think");
            removeFromDom(props)
        })
        .catch(err=>console.log(err))
    }};
    // app.delete('/api/products/:id', ProductController.deleteProduct);
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
                            
                            {/* <Link className="linkButton" to={"/products/" + product._id + "/edit"}>
                                Edit 
                            </Link> */}
                            <button className="myButton" onClick={(e)=>{onDelete(product._id)}}>
                                Delete
                            </button>

                           {/* This bloody works all by itself. */}
                            <button className="myButton" onClick={(e)=>{removeFromDom(product._id)}}>
                                No Dom
                            </button>
                    </div>
                    </li>
                })}
            </ol>
        </div>
    )
}

{/* <ProductDetail path="/products/:id" /> */}
export default ProductList;