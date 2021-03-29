import Link, { LinkProps } from 'next/link';
import { FC } from 'react';

const NavItem: FC<LinkProps> = ({ children, ...props }) => {
  return (
    <li className="mb-4 btn block">
      <Link {...props}>{children}</Link>
    </li>
  );
};

export default NavItem;
