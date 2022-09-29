import React from 'react';
import './NavMobile.scss';
import { Link, useLocation } from 'react-router-dom';
import logoHeader from '../../images/logo.svg';
import { CategoryList } from '../CategoryList/CategoryList';
import { Category } from '../../types/ICategory';

type Props = {
  isActive: boolean;
  clickHandler: () => void;
  categories: Category[];
};

export const NavMobile: React.FC<Props> = ({ clickHandler, categories }) => {
  const { search } = useLocation();

  return (
    <nav
      className="NavMobile"
      id="nav-mob"
    >
      <div className="NavMobile__header">
        <Link
          to={{
            pathname: '/',
            search,
          }}
        >
          <img
            src={logoHeader}
            alt="Logo"
            className="logo__image"
          />
        </Link>

        <button
          type="button"
          className="icon icon--menu-cross"
          onClick={() => {
            document.body.style.overflow = 'visible';
            clickHandler();
          }}
        >
        </button>
      </div>

      <div className="NavMobile__container">
        <CategoryList categories={categories} clickHandler={clickHandler} />
      </div>
    </nav>
  );
};
