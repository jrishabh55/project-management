import { FC } from 'react';

const NavItem: FC = ({ children }) => {
  return <li className="btn mb-2 border-4 border-b-8">{children}</li>;
};

export default NavItem;
