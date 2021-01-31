import Avatar from 'components/Avatar';
import NavItem from 'components/Nav/NavItem';
import { FC } from 'react';

const Nav: FC = () => {
  return (
    <>
      <nav className="md:h-screen bg-gray-700 p-2">
        <Avatar>Rishabh</Avatar>
        <ul className="flex flex-col">
          <NavItem>Home</NavItem>
          <NavItem>Tasks</NavItem>
          <NavItem>Reports</NavItem>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
