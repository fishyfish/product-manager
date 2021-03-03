import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';
import ProductReusableForm from '../components/ProductReusableForm';

const Update = (props) => {
    const { id } = props;
    const [product, setProduct] = useState();
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => {
                setProduct(res.data);
                setLoaded(true);
            })
    }, [])
    const updateProduct = product => {
        axios.put('http://localhost:8000/api/products/' + id, product)
        .then((res) => {
            if(res.data.errors){
                console.log(res.data.errors)
            } else {
                console.log(res.data);
                navigate(`/products/`);
            }
        })
            
        .catch(err=>console.log(err))
    }
    return (
        <div className="product-update">
            {loaded && (
                <ProductReusableForm
                    onSubmitProp={updateProduct}
                    initialTitle={product.title}
                    initialPrice={product.price}
                    initialDescription={product.description}
                />
            )}
        </div>
    )
}
export default Update;