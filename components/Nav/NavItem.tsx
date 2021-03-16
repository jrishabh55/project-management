import { FC } from 'react';

const NavItem: FC = ({ children }) => {
  return <li className="btn mb-2 nm-convex-gray-600-sm">{children}</li>;
};

export default NavItem;
