// import Header from 'components/Header';
import Meta from 'components/Meta';
import Nav from 'components/Nav';
import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

const Layout: FC<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>> = ({
  children,
  className
}) => {
  return (
    <div className={`h-screen ${className}`}>
      <Meta />
      <main className="flex flex-row">
        <Nav />
        <section className="flex flex-grow flex-col">
          {/* <Header /> */}
          {children}
        </section>
      </main>
    </div>
  );
};

export default Layout;
