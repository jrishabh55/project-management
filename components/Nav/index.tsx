import Avatar from 'components/Avatar';
import NavItem from 'components/Nav/NavItem';
import { FC } from 'react';

const Nav: FC = () => {
  return (
    <>
      <nav className="h-screen p-2 border-r-2">
        <Avatar>Rishabh</Avatar>
        <ul className="flex flex-col">
          <NavItem href="/">Home</NavItem>
          <NavItem href="/tasks">Tasks</NavItem>
          <NavItem href="/reports">Reports</NavItem>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
