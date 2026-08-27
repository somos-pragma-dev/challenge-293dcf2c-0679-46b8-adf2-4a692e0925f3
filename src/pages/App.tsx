import React from 'react';
import { Product } from '../types/product';
import { ProductContextType } from '../contexts/ProductContext';

type ProductListProps = {
  products: Product[];
  deleteProduct: (id: string) => void;
};

const ProductList: React.FC<ProductListProps> = ({ products, deleteProduct }) => {
  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button onClick={() => deleteProduct(product.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;