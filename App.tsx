
import Dashboard from 'components/Dashbord/Dashbord';
import EgovService from 'components/Dashbord/TileServices/EgovService';
import Home from 'components/Home';
import Login from 'components/Login/Login';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

const App = (): JSX.Element => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/egov" element={<EgovService />} /> {/* Add EgovService route */}
      </Routes>
    </div>
  );
};

export default App;
