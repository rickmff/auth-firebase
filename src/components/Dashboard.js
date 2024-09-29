import React from 'react';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate('/signin');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome, {auth.currentUser.email}!</p>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
}

export default Dashboard;