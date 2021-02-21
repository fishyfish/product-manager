import React, {useEffect, useState } from 'react';
import axios from 'axios';
import {Link, link, navigate} from '@reach/router';

const ProductList = (props) => {
    const [allProducts, setAllProducts] = useState([]);
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

    return (
        <div>
            <ol>
                {/* getting all products */}
                {props.product.map((product, idx)=>{
                    return <li key={idx}> 
                        <span className="newLine"><em>Title:</em> {product.title}</span>
                            <span className="newLine"><em>ID:</em> {product._id}</span>
                            <div class="align-right">
                                <button className="myButton" onClick={() => navigate(`/products/${product._id}`)}>
                                    View Product
                                </button>
                            </div>
                            {/* <Link to={"/products/" + product._id }>
                                Edit 
                            </Link> works fine, but I like the button */} 

                        {/* <span className="newLine"><em>Price:</em> {product.price}</span>
                        <span className="newLine"><em>Description:</em> {product.description}</span> */}
                    </li>
                })}
            </ol>
        </div>
    )
}

{/* <ProductDetail path="/products/:id" /> */}
export default ProductList;