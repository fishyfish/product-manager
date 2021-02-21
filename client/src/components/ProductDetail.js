import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ProductDetail = (props) => {
    const [product, getOneProduct] = useState({})
    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + props.id)
            .then(res => getOneProduct({
                ...res.data
            }))
            .catch(err=>console.log(err))
    }, [])
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
export default ProductDetail;