import { QueryFunction } from '@tanstack/react-query';
import Product from '../../types/Product';
const baseUrl = 'https://api.escuelajs.co/api/v1';

export const fetchProducts: QueryFunction<Product[]> = async () => {
  const url = `${baseUrl}/products`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }
  return response.json();
};
