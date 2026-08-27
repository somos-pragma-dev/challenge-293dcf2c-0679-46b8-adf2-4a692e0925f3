import React, { useState, useEffect } from 'react';
import { Product } from '../types/product';
import { useProduct } from '../hooks/useProduct';
import ProductForm from './ProductForm';
import ProductList from './ProductList';

const App: React.FC = () => {
  const { products, addProduct, deleteProduct } = useProduct();

  return (
    <div>
      <h1>Product Catalog</h1>
      <ProductForm addProduct={addProduct} />
      <ProductList products={products} deleteProduct={deleteProduct} />
    </div>
  );
};

export default App;