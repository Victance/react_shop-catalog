import React, { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { getProducts } from '../../api/products';
import { Product } from '../../types/IProduct';
import { Loader } from '../Loader/Loader';
import { Pagination } from '../Pagination/Pagination';
import { ProductItem } from '../ProductItem/ProductItem';
import './ProductList.scss';

export const ProductList: React.FC = React.memo(() => {
  const [products, setProducts] = useState<Product[]>([]);
  const { category } = useParams();
  const [searchParams] = useSearchParams();
  const pageFromSearch = searchParams.get('page');
  const [isLoaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(false);

    getProducts()
      .then(data => setProducts(data))
      .finally(() => setLoaded(true));
  }, []);

  let sortedByCategory;

  if (category) {
    sortedByCategory = products.filter(product => product.category.name === category);
  } else {
    sortedByCategory = products;
  }

  let displayedProducts;

  if (pageFromSearch) {
    displayedProducts = sortedByCategory.slice((+pageFromSearch * 20 - 20), (+pageFromSearch * 20));
  } else {
    displayedProducts = sortedByCategory.slice(0, 20);
  }

  return (
    <>
      {isLoaded
        ? (
          <div className="ProductListContainer">
            <ul className="ProductList">

              {displayedProducts.length > 0
                ? (
                  displayedProducts.map(product => (
                    <ProductItem
                      key={product.id}
                      product={product}
                    />
                  ))
                ) : (
                  <div className="ProductList__noProducts">
                    No products in this category yet
                  </div>
                )}

            </ul>

            {displayedProducts.length > 0 && (
              <Pagination
                total={sortedByCategory.length}
              />
            )}
          </div>
        ) : (
          <Loader />
        )}
    </>
  );
});
