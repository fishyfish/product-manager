import React, { useEffect, useState } from 'react'
import axios from 'axios';
const ProductReusableForm = (props) => {
    const { initialTitle, initialPrice, initialDescription, onSubmitProp } = props;
    const [title, setTitle] = useState(initialTitle);
    const [price, setPrice] = useState(initialPrice);
    const [description, setDescription] = useState(initialDescription);
    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({title, price, description});
    }
        
    return (
        <form onSubmit={onSubmitHandler}>
            <div className="form-wrapper">
                 <h2 className="">Edit a Product</h2>
                <div className="form-wrapper">
                <p>
                    <label>Title</label><br />
                    <input 
                        type="text" 
                        name="title" 
                        value={title} 
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </p>
                <p>
                    <label>Price</label><br />
                    <input 
                        type="text" 
                        name="prict" 
                        value={price} 
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </p>
                <p>
                    <label>Description</label><br />
                    <input 
                        type="text" 
                        name="description" 
                        value={description} 
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </p>
                <button className="toggle-me" type="submit">Submit</button>
                </div>
            </div>
        </form>
    )
}
export default ProductReusableForm;

