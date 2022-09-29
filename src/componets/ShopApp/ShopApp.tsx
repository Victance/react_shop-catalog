/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import './ShopApp.scss';
import { ProductList } from '../ProductList/ProductList';
import { Header } from '../Header/Header';
import { getCategories } from '../../api/products';
import { Category } from '../../types/ICategory';
import { CategoryList } from '../CategoryList/CategoryList';
import { NavMobile } from '../NavMobile/NavMobile';
import { Footer } from '../Footer/Footer';

export const ShopApp: React.FC = () => {
  const [isActive, setActive] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);

  const setInactive = () => {
    setActive(false);
  };

  useEffect(() => {
    getCategories()
      .then(data => setCategories(data));
  }, []);

  return (
    <div className="ShopApp">
      <Header clickHandler={setActive} />

      <div className="ShopAppContent">
        <div
          className={classNames('NavMobileContainer', {
            'NavMobileContainer--active': isActive,
          })}
        >
          <NavMobile
            isActive={isActive}
            clickHandler={setInactive}
            categories={categories}
          />
        </div>

        <main className="ShopApp__main">
          <nav className="ShopApp__menu">
            <CategoryList categories={categories} />
          </nav>

          <ProductList />
        </main>
      </div>

      <Footer />
    </div>
  );
};

// interface Props {
//   onClick: () => void;
// }

// export const Provider: React.FC<Props> = React.memo(
//   ({ onClick, children }) => (
//     <button
//       type="button"
//       onClick={onClick}
//     >
//       {children}
//     </button>
//   ),
// );

// {/* <Provider onClick={() => ({})}>
// </Provider> */}
