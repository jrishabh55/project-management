import Button from 'components/Button';
import { Card } from 'components/Card';
import { useFirebase } from 'context/firebase';
import { FC } from 'react';

const Login: FC = () => {
  const { auth, firebase } = useFirebase();
  const handleLogin = () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    auth.signInWithPopup(provider).catch((err) => {
      console.error(err);
      alert('Login failed.');
    });
  };
  return (
    <Card className="h-screen flex-center">
      <Button onClick={handleLogin}>Login with google</Button>
    </Card>
  );
};

export default Login;
