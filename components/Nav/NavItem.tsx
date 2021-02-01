import { FC } from 'react';

const NavItem: FC = ({ children }) => {
  return (
    <li className="p-2 mb-2 text-center border-4 border-b-8 shadow-2xl rounded-lg">{children}</li>
  );
};

export default NavItem;
