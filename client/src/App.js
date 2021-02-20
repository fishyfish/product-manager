import './App.css';
import React from 'react';
import { Router } from '@reach/router'; 
import Main from './views/Main';
import ProductDetail from './views/ProductDetail';
import ProductForm from './components/ProductForm';
function App() {
  return (
    <div className="App">
      {/* <Router> 
        <Main path="/products/" />
        <ProductDetail path="/products/:id" />
      </Router> */}
      <Main path="/products/" />
    </div>
  );
}

export default App;