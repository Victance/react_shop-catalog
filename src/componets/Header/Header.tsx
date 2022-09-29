import React from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import classNames from 'classnames';
import './Header.scss';
import logoHeader from '../../images/logo.svg';
import { getSearchWith } from '../../helpers/getSearchWith';

type Props = {
  clickHandler: (value: boolean) => void;
};

export const Header: React.FC<Props> = React.memo(({ clickHandler }) => {
  const { search } = useLocation();
  const [searchParams] = useSearchParams();
  const view = searchParams.get('view');

  return (
    <header className="Header" id="header">
      <div className="HeaderWrapper">
        <div className="Header__container">
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
            id="nav-mob-toggler"
            type="button"
            className="icon icon--menu"
            onClick={() => {
              document.body.style.overflow = 'hidden';
              clickHandler(true);
            }}
          >
          </button>
        </div>

        <div className="Header__view">
          <Link
            to={{ search: getSearchWith({ view: 'two-tiles' }, searchParams) }}
            className={classNames('icon icon--twoTilesToggler', {
              'icon--twoTilesTogglerActive': view,
            })}
          />

          <Link
            to={{ search: getSearchWith({ view: '' }, searchParams) }}
            className={classNames('icon icon--fourTilesToggler', {
              'icon--fourTilesTogglerActive': !view,
            })}
          />
        </div>
      </div>
    </header>
  );
});
