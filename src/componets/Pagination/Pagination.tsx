import React from 'react';
import classNames from 'classnames';
import './Pagination.scss';
import { Link, useSearchParams } from 'react-router-dom';
import ScrollIntoView from 'react-scroll-into-view';
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
        <ScrollIntoView
          selector="#header"
          style={currentPage === 1 ? { 'pointer-events': 'none' } : {}}
        >
          <li className="Pagination__item">
            <Link
              className="Pagination__link"
              to={{ search: getSearchWith(backSearchObject, searchParams) }}
            >
              «
            </Link>
          </li>
        </ScrollIntoView>

        {pages.map(page => (
          <ScrollIntoView selector="#header" key={page}>
            <li
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
          </ScrollIntoView>
        ))}

        <ScrollIntoView
          selector="#header"
          style={currentPage === lastPage ? { 'pointer-events': 'none' } : {}}
        >
          <li className="Pagination__item">
            <Link
              className="Pagination__link"
              to={{ search: getSearchWith(forthSearchObject, searchParams) }}
            >
              »
            </Link>
          </li>
        </ScrollIntoView>
      </ul>
    </>
  );
});
