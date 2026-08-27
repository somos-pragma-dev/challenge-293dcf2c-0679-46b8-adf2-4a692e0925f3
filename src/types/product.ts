import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductList from '../src/components/ProductList';
import { ProductProvider } from '../src/contexts/ProductContext';

describe('ProductList', () => {
  it('renders without crashing', () => {
    render(
      <ProductProvider>
        <ProductList products={[]} deleteProduct={() => {}} />
      </ProductProvider>
    );
  });

  it('displays product list', () => {
    const products = [
      { id: '1', name: 'Product 1', price: 10, description: 'Description 1', category: 'Category 1' },
      { id: '2', name: 'Product 2', price: 20, description: 'Description 2', category: 'Category 2' },
    ];
    render(
      <ProductProvider>
        <ProductList products={products} deleteProduct={() => {}} />
      </ProductProvider>
    );
    products.forEach((product) => {
      expect(screen.getByText(product.name)).toBeInTheDocument();
    });
  });
});