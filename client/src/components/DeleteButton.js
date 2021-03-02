import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link, link, navigate} from '@reach/router';


const DeleteButton = (props) => {
    const { productId, successCallback } = props;
    const [product, setProduct] = useState({});
    const deleteProduct = e => {
        axios.delete('http://localhost:8000/api/products/' + productId)
            .then(res=>{
                //successCallback();
                console.log("what is going on here?");
                setProduct();
                // return to products.
                navigate(`/products/`);
            })
    }
    return (
        // <button onClick={deleteProduct}>
        //     Delete
        // </button>
        <button type="button" 
            className="myButton" 
            onClick={() => { if (window.confirm('Are you sure you wish to delete this Product?'))
                deleteProduct(product._id) } } >
            Delete Product
        </button>
    )
}
export default DeleteButton;