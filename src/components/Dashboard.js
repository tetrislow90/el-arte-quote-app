// src/components/Dashboard.js
import { Container, Button } from 'react-bootstrap';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await auth.signOut();
    navigate('/');
  };

  return (
    <Container className="mt-5">
      <h1>Welcome!</h1>
      <p>You are now logged in.</p>
      <Button variant="secondary" onClick={handleLogout}>
        Log Out
      </Button>
    </Container>
  );
}

