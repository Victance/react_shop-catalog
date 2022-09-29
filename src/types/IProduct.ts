import { Category } from './ICategory';

export interface Product {
  id: number,
  title: string,
  price: number,
  category: Category,
  description: string,
  images: string[],
}
