import React, { useEffect, useState } from 'react'
import axios from 'axios';

const ProductDetail = (props) => {
    const [product, setProduct] = useState({})
    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + props.id)
            .then(res => setProduct({
                ...res.data
            }))
    }, [])
    return (
        <div>
            <p>Title ME: {product.title}</p>
            <p>Price YOU: {product.price}</p>
            <p>Description DESC: {product.description}</p>
        </div>
    )
}
export default ProductDetail;
