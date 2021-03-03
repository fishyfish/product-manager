import './App.css';
import React from 'react';
import { Router } from '@reach/router'; 
import {link, navigate} from '@reach/router';
import Main from './views/Main';
import ProductDetail from './components/ProductDetail';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';
import ProductEdit from './components/ProductEdit';
import ProductUpdate from './components/ProductUpdate';

function App() {
  const NotFound = () => {
    return (
      <div className="error">Sorry, You Route Was Not Found</div>
    )
  };
  return (
    <div className="App">
      {/* ProductDetail, path" this appears to not be working since I can change the path and it doesn't show up. */}
      <Router>
        <Main path="/products/" />
        <ProductDetail path="/products/:id" />  
        {/* <ProductEdit path="/products/:id/edit/" /> */}
        <ProductUpdate path="/products/:id/edit/" />
        <NotFound default /> 
      </Router>
    </div>
  );
}

export default App;