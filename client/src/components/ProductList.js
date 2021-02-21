import React from 'react'
import axios from 'axios';
import { Router, Link } from '@reach/router'; 

const ProductList = (props) => {
    const detailLink ={
        pathname:"/products/props.id"
    }

    return (
        <ol>
            {props.product.map((product, idx)=>{
                return <li key={idx}> 
                    <span className="newLine"><em>Title:</em> {product.title}</span>
                   
                    {/* <Link to={product, idx}> */}
                        <span className="newLine"><em>Title:</em> {product.title}</span>
                    {/* </Link> */}

                    {/* <span className="newLine"><em>Price:</em> {product.price}</span>
                    <span className="newLine"><em>Description:</em> {product.description}</span> */}
                </li>
            })}
        </ol>
    )
}

{/* <ProductDetail path="/products/:id" /> */}
export default ProductList;