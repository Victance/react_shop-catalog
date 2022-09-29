import { Category } from '../types/ICategory';
import { Product } from '../types/IProduct';

const BASE_URL = 'https://api.escuelajs.co/api/v1';

export const getProducts = (): Promise<Product[]> => {
  return fetch(`${BASE_URL}/products`)
    .then(res => res.json());
};

export const getCategories = (): Promise<Category[]> => {
  return fetch(`${BASE_URL}/categories`)
    .then(res => res.json());
};
