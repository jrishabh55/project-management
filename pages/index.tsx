import CreateTask from 'components/form/tasks/CreateTask';
import Layout from 'components/Layout';
import { FC } from 'react';

const Home: FC = () => {
  return (
    <div className="h-screen">
      <Layout>
        <section className="flex-center h-screen">
          <CreateTask />
        </section>
      </Layout>
    </div>
  );
};

export default Home;
