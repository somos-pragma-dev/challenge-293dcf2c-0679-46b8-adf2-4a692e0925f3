import { Product } from '../types/product';

export const useProduct = (): {
  products: Product[];
  addProduct: (product: Product) => void;
  deleteProduct: (id: string) => void;
} => {
  const [products, setProducts] = React.useState<Product[]>([]);

  const addProduct = (product: Product) => {
    setProducts((prevProducts) => [...prevProducts, product]);
  };

  const deleteProduct = (id: string) => {
    setProducts((prevProducts) => prevProducts.filter((product) => product.id!== id));
  };

  return { products, addProduct, deleteProduct };
};