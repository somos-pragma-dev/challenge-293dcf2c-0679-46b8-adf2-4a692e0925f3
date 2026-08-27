import { Product } from './types/product';

export const addProduct = (product: Product) => {
  // Simulate adding product to a backend
  console.log('Product added:', product);
};

export const deleteProduct = (id: string) => {
  // Simulate deleting product from a backend
  console.log('Product deleted with id:', id);
};