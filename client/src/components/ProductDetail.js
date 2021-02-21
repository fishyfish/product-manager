import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ProductDetail = (props) => {
    const [product, setProduct] = useState({})
    const [loaded, setLoaded] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + props.id) // works fine
            .then((res) => {
                console.log('This is so awesome' + res.data);
                setProduct(res.data)
                setLoaded(true);
            })
            .catch(err=>console.log('something is errored out' + err))
    }, [])
    return (
        <div className="form-wrapper">
            <div className="form-wrapper">
                <h2>Product Description</h2>
                <ol>
                    <li> 
                        <span className="newLine"><em>Title:</em> {product.title}</span> 
                        <span className="newLine"><em>Price:</em> {product.price}</span> 
                        <span className="newLine"><em>Description:</em> {product.description}</span>
                    </li>
                </ol>
            </div>
         </div>
    )
}
export default ProductDetail;