import classNames from 'classnames';
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { useLocalStorage } from '../../helpers/useLocalStorage';
import { Product } from '../../types/IProduct';
import './ProductItem.scss';

type Props = {
  product: Product;
};

export const ProductItem: React.FC<Props> = React.memo(({ product }) => {
  const [searchParams] = useSearchParams();
  const [isFavorite, setFavorite] = useLocalStorage(`${product.id}`, false);

  const view = searchParams.get('view');

  const productTitle = product.title;

  return (
    <li
      className={classNames('ProductItem', {
        'ProductItem--twoTiles': view,
      })}
    >
      <div
        className={classNames('ProductItem__imgContainer', {
          'ProductItem__imgContainer--twoTiles': view,
        })}
      >
        <img
          className="ProductItem__img"
          src={product.images[0]}
          alt={productTitle}
        />
      </div>

      <div className="ProductItem__container">
        <p
          className="ProductItem__title"
          title={productTitle}
        >
          {productTitle}
        </p>

        <button
          type="button"
          className={classNames('ProductItem__favoriteIcon', {
            'ProductItem__favoriteIcon--active': isFavorite,
          })}
          onClick={() => setFavorite(!isFavorite)}
        >
        </button>
      </div>

      <p className="ProductItem__price">
        {`${product.price}$`}
      </p>
    </li>
  );
});
