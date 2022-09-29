import React from 'react';
import './NavMobile.scss';
import logoHeader from '../../images/logo.svg';
import { CategoryList } from '../CategoryList/CategoryList';
import { Category } from '../../types/ICategory';

type Props = {
  isActive: boolean;
  clickHandler: () => void;
  categories: Category[];
};

export const NavMobile: React.FC<Props> = React.memo(({ clickHandler, categories }) => {
  return (
    <nav
      className="NavMobile"
      id="nav-mob"
    >
      <div className="NavMobile__header">
        <a href="#homepage" className="logo">
          <img
            src={logoHeader}
            alt="Logo"
            className="logo__image"
          />
        </a>

        <button
          type="button"
          className="icon icon--menu-cross"
          id="nav-mob-toggler-2"
          onClick={() => clickHandler(false)}
        >
        </button>
      </div>

      <div className="NavMobile__container">
        <CategoryList categories={categories} clickHandler={clickHandler} />
      </div>
    </nav>
  );
});
