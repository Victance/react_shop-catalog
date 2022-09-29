/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {
  HashRouter as Router, Route, Routes,
} from 'react-router-dom';
import { ShopApp } from './componets/ShopApp/ShopApp';

export const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ShopApp />}>
          <Route path=":category" element={<ShopApp />} />
        </Route>
        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>
    </Router>
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
