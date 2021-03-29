import { Card } from 'components/Card';
import CreateTask from 'components/form/tasks/CreateTask';
import Layout from 'components/Layout';
import { useFirebase } from 'context/firebase';
import { useRouter } from 'next/router';
import { FC, useEffect } from 'react';

const Home: FC = () => {
  const { user, isInitialized: initialized } = useFirebase();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.replace('/login');
    }
  }, [user]);

  if (!initialized) {
    return <Card className="h-screen flex-center">Loading</Card>;
  }

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
