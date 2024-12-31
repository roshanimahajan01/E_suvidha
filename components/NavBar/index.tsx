import React, { useState } from 'react';
import { Avatar } from '@mui/material';
import './index.scss';

// Language translations
const translations = {
  en: {
    projectName: 'Aple E-Seva Kendra',
    logout: 'Logout',
  },
  mr: {
    projectName: 'आपले ई-सेवा केंद्र',
    logout: 'बाहेर पडणे',
  },
};

const Navbar = ({ handleLogout }: { handleLogout: () => void }) => {
  const [language, setLanguage] = useState<'en' | 'mr'>('en');

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(event.target.value as 'en' | 'mr');
  };

  const t = translations[language]; // Get translations based on selected language

  return (
    <div className="dashboard-container">
      <div className="navbar">
        <div className="navbar-left">
          <img src="logo.png" alt="Logo" className="logo" />
          <h1 className="project-name">{t.projectName}</h1>
        </div>
        <div className="navbar-right">
          <select
            value={language}
            onChange={handleLanguageChange}
            className="language-dropdown"
          >
            <option value="en">English</option>
            <option value="mr">मराठी</option>
          </select>
          <Avatar alt="User Avatar" src="user-avatar.png" />
          <button onClick={handleLogout} className="logout-button">
            {t.logout}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
