import { FC } from 'react';

const NavItem: FC = ({ children }) => {
  return (
    <li className="p-2 mb-2 text-gray-300 text-center border-b-2 border-gray-800 border shadow rounded-lg">
      {children}
    </li>
  );
};

export default NavItem;
