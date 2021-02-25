import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {Link, link, navigate} from '@reach/router';
import { setServers } from 'dns';

const ProductEdit = (props) => {
    const {productId} = props;
    const [product, setProduct] = useState({})
    const [loaded, setLoaded] = useState([]);
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const { removeFromDom } = props;
   
    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + props.id) // works fine
            .then((res) => {
                console.log('This is so awesome' + res.data);
                setProduct(res.data)
                setLoaded(true);

                const myProduct = res.data;
                console.log(myProduct);
                setTitle(myProduct.title);
                setTitle(myProduct.price);
                setTitle(myProduct.description);
            })
            .catch(err=>console.log('something is errored out' + err))
    }, []);

    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        axios.put('http://localhost:8000/api/products/' + props.id, {
            title:title,
            price:price,
            description:description,      
        })   
        .then((res) => {
            if(res.data.errors){
                console.log(res.data.errors)
                setServers(res.data.errors)
            } else {
                console.log(res.data);
                navigate(`/products/`);
            }
        })
            
        .catch(err=>console.log(err))
    };

    return (
        <div className="form-wrapper edit">
            <form onSubmit={onSubmitHandler}>
            <div className="form-wrapper">
                <h2>Edit Product Description</h2>
                <p>
                <label>Title</label>
                <input type="text" defaultValue={product.title} onChange={(e)=>setTitle(e.target.value)}/>
            </p>
            <p>
                <label>Price</label>
                <input type="text" defaultValue={product.price} onChange={(e)=>setPrice(e.target.value)}/>
            </p>
            <p>
                <label>Description</label>
                <input type="text" defaultValue={product.description} onChange={(e)=>setDescription(e.target.value)}/>
            </p>
                <button className="myButton" onClick={() => navigate(`/products/`)}>
                    Back to Products
                </button>
                <button className="myButton" type="submit">Submit</button>
            </div>
            </form>
        </div>
    )
}
export default ProductEdit;