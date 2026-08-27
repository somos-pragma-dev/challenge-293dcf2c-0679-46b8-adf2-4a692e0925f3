import React, { useState } from 'react';
import { Product } from '../types/product';
import { ProductContextType } from '../contexts/ProductContext';

type ProductFormProps = {
  addProduct: (product: Product) => void;
};

const ProductForm: React.FC<ProductFormProps> = ({ addProduct }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (name && price >= 0) {
      addProduct({ id: Date.now().toString(), name, price, description, category });
      setName('');
      setPrice(0);
      setDescription('');
      setCategory('');
    } else {
      alert('Invalid product data');
    }
  };

  return (
    <div>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Price:</label>
          <input type="number" value={price} onChange={(e) => setPrice(Number(e.target.value))} />
        </div>
        <div>
          <label>Description:</label>
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div>
          <label>Category:</label>
          <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
        </div>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default ProductForm;