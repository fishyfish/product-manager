import React from 'react'
import axios from 'axios';
//import productModel from '../../../server/models/product.model';
const ProductList = (props) => {
    return (
        <ol>
            {props.product.map((product, idx)=>{
                return <li key={idx}> 
                    <span className="newLine"><em>Title:</em> {product.title}</span> 
                    <span className="newLine"><em>Price:</em> {product.price}</span> 
                    <span className="newLine"><em>Description:</em> {product.description}</span>
                </li>
            })}
        </ol>
    )
}
export default ProductList;