import Dashboard from 'components/Dashbord/Dashbord';
import Footer from 'components/Footer/indext';
import LatestUpdate from 'components/LatestUpdate/indext';
import Navbar from 'components/NavBar';
import React from 'react';
import { useNavigate } from 'react-router-dom';

// Second child component
const SecondComponent = () => {
  return (
    <div style={{ backgroundColor: 'lightgreen', height: '100%' }}>
      <h2>Second Component (30%)</h2>
      <p>This component takes 30% of the width.</p>
    </div>
  );
};

// Home component
const Home = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/');
  };

  return (
    <>
      <Navbar handleLogout={handleLogout} />
      
      <div style={{ display: 'flex', height: '100vh' }}>
        <div style={{ flex: '0 0 80%' }}>
          <Dashboard />
        </div>
        <div style={{ flex: '0 0 20%' }}>
          <LatestUpdate />
        </div>
      </div>

      {/* Footer at the bottom */}
      <Footer />
    </>
  );
};

export default Home;
