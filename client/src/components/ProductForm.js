import React, { useState } from 'react'
import axios from 'axios';

const ProductForm = () => {
    //keep track of what is being typed via useState hook
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    //handler when the form is submitted
    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new product
        axios.post('http://localhost:8000/api/products', {
            title,
            price,
            description,      
        })
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
    };
    
    //onChange to update firstName and lastName
    return (
        <form onSubmit={onSubmitHandler}>
            
            <div className="form-wrapper">
            <p>
                <label>Title</label>
                <input type="text" placeholder="Title" onChange = {(e)=>setTitle(e.target.value)}/>
            </p>
            <p>
                <label>Price</label>
                <input type="text" placeholder="Price" onChange = {(e)=>setPrice(e.target.value)}/>
            </p>
            <p>
                <label>Description</label>
                <input type="text" placeholder="Description" onChange = {(e)=>setDescription(e.target.value)}/>
            </p>

            <button className="toggle-me" type="submit">Create</button>
            </div>
        </form>
    )
}
export default ProductForm;