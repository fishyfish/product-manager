import React, { useState } from 'react'
import axios from 'axios';
//import { ESRCH } from 'constants';

const ProductForm = (props) => {
    //keep track of what is being typed via useState hook
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [errs, setErrs] = useState({});

    //handler when the form is submitted
    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        //e.preventDefault();
        // but it prevents the page getting a product added to dom. comment out and it works fine
        //make a post request to create a new product
        const newProduct = {
            title:title,
            price:price,
            description:description,
        }
        
        console.log(newProduct);
        
        axios.post('http://localhost:8000/api/products/', {
            title,
            price,
            description,      
        })
        .then((response) =>{
            if (response.data.errors){
                console.log(response.data.errors);
                setErrs(response.data.errors);
            } else {
            console.log(response.data);
            }
        })
        .catch((err) => {
            console.log(err);
        })
    };
    
    //onChange to update firstName and lastName
    return (
        <form onSubmit={onSubmitHandler}>
            
            <div className="form-wrapper">
            <h1 className="centerme">Product Manager</h1>
            <p>
                <label>Title</label>
                <input type="text" placeholder="Title" onChange = {(e)=>setTitle(e.target.value)}/>
                {
                    errs.title ?
                    <span className="error-text">{errs.title.message}</span>
                    :null
                }
            </p>
            <p>
                <label>Price</label>
                <input type="text" placeholder="Price" onChange = {(e)=>setPrice(e.target.value)}/>
                {
                    errs.price ?
                    <span className="error-text">{errs.price.message}</span>
                    :null
                }
            </p>
            <p>
                <label>Description</label>
                <input type="text" placeholder="Description" onChange = {(e)=>setDescription(e.target.value)}/>
                {
                    errs.description ?
                    <span className="error-text">{errs.description.message}</span>
                    :null
                }
            </p>

            <button className="toggle-me" type="submit">Create</button>
            </div>
        </form>
    )
}
export default ProductForm;