import classNames from 'classnames';
import React from 'react';
import { NavLink, useSearchParams } from 'react-router-dom';
import { Category } from '../../types/ICategory';
import './CategoryList.scss';

type Props = {
  categories: Category[];
  clickHandler?: () => void;
};

export const CategoryList: React.FC<Props> = React.memo(({ categories, clickHandler }) => {
  const [searchParams] = useSearchParams();

  function filterSearch(page: string): string {
    const copy = new URLSearchParams(searchParams.toString());

    // eslint-disable-next-line no-restricted-syntax, @typescript-eslint/no-unused-vars
    for (const [key] of copy) {
      if (key === page) {
        copy.delete(key);
      }
    }

    return copy.toString();
  }

  return (
    <ul className="CategoryList">
      <li>
        <NavLink
          to={{
            pathname: '/',
            search: filterSearch('page'),
          }}
          className="CategoryList__link CategoryList__link--bold"
          onClick={() => {
            document.body.style.overflow = 'visible';
            if (clickHandler) {
              clickHandler();
            }
          }}
        >
          Переглянути все
        </NavLink>
      </li>

      {categories.map(category => (
        <li key={category.id}>
          <NavLink
            to={{
              pathname: category.name,
              search: filterSearch('page'),
            }}
            className={
              ({ isActive }) => classNames('CategoryList__link', { 'CategoryList__link--active': isActive })
            }
            onClick={() => {
              document.body.style.overflow = 'visible';
              if (clickHandler) {
                clickHandler();
              }
            }}
          >
            {category.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
});
