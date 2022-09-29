import React from 'react';
import classNames from 'classnames';
import './Pagination.scss';
import { Link, useSearchParams } from 'react-router-dom';
import { getNumbers } from '../../helpers/getNumbers';
import { getSearchWith } from '../../helpers/getSearchWith';

type Props = {
  total: number,
};

export const Pagination:React.FC<Props> = React.memo(({
  total,
}) => {
  const lastPage = Math.ceil(total / 20);
  const pages = getNumbers(1, Math.ceil(lastPage));
  const [searchParams] = useSearchParams();

  const pageSearch = searchParams.get('page');

  const currentPage = pageSearch !== null
    ? Number(pageSearch)
    : 1;

  // eslint-disable-next-line @typescript-eslint/indent, no-console
  console.log(currentPage);

  const backSearchObject = currentPage - 1 !== 1
    ? { page: (currentPage - 1).toString() }
    : { page: '' };

  const forthSearchObject = { page: (currentPage + 1).toString() };

  const getNumberSearchObject = (page: number) => {
    return page !== 1
      ? { page: page.toString() }
      : { page: '' };
  };

  return (
    <>
      <ul className="Pagination">
        <li
          className={classNames('Pagination__item', {
            'Pagination__item--disabled': currentPage === 1,
          })}
        >
          <Link
            className="Pagination__link"
            to={{ search: getSearchWith(backSearchObject, searchParams) }}
          >
            «
          </Link>
        </li>

        {pages.map(page => (
          <li
            key={page}
            className={classNames('Pagination__item', {
              'Pagination__item--active': page === currentPage,
            })}
          >
            <Link
              className="Pagination__link"
              to={{ search: getSearchWith(getNumberSearchObject(page), searchParams) }}
            >
              {page}
            </Link>
          </li>
        ))}

        <li
          className={classNames('Pagination__item', {
            'Pagination__item--disabled': currentPage === lastPage,
          })}
        >
          <Link
            className="Pagination__link"
            to={{ search: getSearchWith(forthSearchObject, searchParams) }}
          >
            »
          </Link>
        </li>
      </ul>
    </>
  );
});
