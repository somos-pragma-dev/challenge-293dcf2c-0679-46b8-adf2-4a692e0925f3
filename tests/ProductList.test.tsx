import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductForm from '../src/components/ProductForm';
import { ProductProvider } from '../src/contexts/ProductContext';

describe('ProductForm', () => {
  it('renders without crashing', () => {
    render(
      <ProductProvider>
        <ProductForm addProduct={() => {}} />
      </ProductProvider>
    );
  });

  it('submits form with valid data', () => {
    render(
      <ProductProvider>
        <ProductForm addProduct={(product) => {
          expect(product.name).toBe('Product 1');
          expect(product.price).toBe(10);
        }} />
      </ProductProvider>
    );
    const nameInput = screen.getByLabelText('Name:') as HTMLInputElement;
    const priceInput = screen.getByLabelText('Price:') as HTMLInputElement;
    const submitButton = screen.getByText('Add Product');

    nameInput.value = 'Product 1';
    priceInput.value = '10';
    fireEvent.change(nameInput, { target: { value: 'Product 1' } });
    fireEvent.change(priceInput, { target: { value: '10' } });
    fireEvent.click(submitButton);
  });
});