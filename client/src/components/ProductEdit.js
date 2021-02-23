import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {Link, link, navigate} from '@reach/router';

const ProductEdit = (props) => {
    const [product, setProduct] = useState({})
    const [loaded, setLoaded] = useState([]);
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const { removeFromDom } = props;
    //handler when the form is submitted
    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new product
        axios.put('http://localhost:8000/api/products/' + props.id, {
            title,
            price,
            description,      
        })   
        
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
    };
    
    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + props.id) // works fine
            .then((res) => {
                console.log('This is so awesome' + res.data);
                setProduct(res.data)
                setLoaded(true);
            })
            .catch(err=>console.log('something is errored out' + err))
    }, []);

    const onDelete = e => {
        const {removeFromDom} = props;
        const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/products/' + props.id)   
            removeFromDom(props)
        .then(res => {
            console.log(res + "was removed, I think");
        })
        .catch(err=>console.log(err))
    }
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
                <Link className="linkButton" to={"/products/" + props.id}>
                    Delete Me
                </Link> 
                <button onClick={(e)=>{onDelete(product._id)}}>
                        Delete
                    </button>
            </div>
            </form>
        </div>
    )
}
export default ProductEdit;