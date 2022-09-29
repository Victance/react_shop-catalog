import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoFooter from '../../images/logo-footer.svg';
import './Footer.scss';

export const Footer: React.FC = React.memo(() => {
  const { search } = useLocation();

  return (
    <footer className="Footer">
      <div className="Footer__container">
        <Link
          to={{
            pathname: '/',
            search,
          }}
        >
          <img
            src={logoFooter}
            alt="Logo"
            className="logo__image"
          />
        </Link>
      </div>
    </footer>
  );
});
