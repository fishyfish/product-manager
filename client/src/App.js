import './App.css';
import React from 'react';
import { Router } from '@reach/router'; 
import Main from './views/Main';
import ProductDetail from './components/ProductDetail';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';
function App() {
  const NotFound = () => {
    return (
      <div className="error">Sorry, You Route Was Not Found</div>
    )
  };
  return (
    <div className="App">
     <Router>
        <Main path="/products/" />
        <ProductDetail path="/products/:id" />
        <NotFound default /> 
      </Router>
    </div>
  );
}

export default App;