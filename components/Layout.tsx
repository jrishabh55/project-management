// import Header from 'components/Header';
import Meta from 'components/Meta';
import Nav from 'components/Nav';
import { FC } from 'react';

const Layout: FC = ({ children }) => {
  return (
    <>
      <Meta />
      <main className="flex flex-row">
        <Nav />
        <section className="flex flex-grow flex-col">
          {/* <Header /> */}
          {children}
        </section>
      </main>
    </>
  );
};

export default Layout;
