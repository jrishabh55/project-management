import Avatar from 'components/Avatar';
import NavItem from 'components/Nav/NavItem';
import Link from 'next/link';
import { FC } from 'react';

const Nav: FC = () => {
  return (
    <>
      <nav className="h-screen p-2 border-r-2">
        <Avatar>Rishabh</Avatar>
        <ul className="flex flex-col">
          <NavItem>
            <Link href="/">Home</Link>
          </NavItem>
          <NavItem>
            <Link href="/tasks">Tasks</Link>
          </NavItem>
          <NavItem>
            <Link href="/reports">Reports</Link>
          </NavItem>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
