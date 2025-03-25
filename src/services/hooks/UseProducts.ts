import { useQuery } from '@tanstack/react-query';
import { fetchProducts } from '../apis/ProductsApi';
import Product from '../../types/Product';

export const useProducts = () => {
  return useQuery<Product[], Error>({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });
};
