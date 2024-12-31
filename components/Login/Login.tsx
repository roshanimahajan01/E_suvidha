import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

const Login = (): JSX.Element => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [language, setLanguage] = useState('English'); // Language state
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === 'admin' && password === '1') {
      navigate('/home');
    } else {
      alert('Invalid credentials');
    }
  };

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(event.target.value);
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh', // Full viewport height
        background: '#f5f5f5', // Light gray background for contrast
      }}
    >
      <div className="login-container">
        {/* Left Section */}
        <div className="left-section">
        <img className="logo" src="path/to/logo.png" alt="Logo" />
          <div className="language-selector">
            <select value={language} onChange={handleLanguageChange}>
              <option value="English">English</option>
              <option value="Marathi">मराठी</option>
            </select>
          </div>
          <h2>{language === 'English' ? 'Login' : 'लॉगिन'}</h2>
          <div className="input-group">
            <label htmlFor="username">{language === 'English' ? 'Username' : 'वापरकर्ता नाव'}</label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder={language === 'English' ? 'Enter your username' : 'तुमचे नाव प्रविष्ट करा'}
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">{language === 'English' ? 'Password' : 'पासवर्ड'}</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder={language === 'English' ? 'Enter your password' : 'तुमचा पासवर्ड प्रविष्ट करा'}
            />
          </div>
          <button onClick={handleLogin}>{language === 'English' ? 'Login' : 'लॉगिन करा'}</button>
        </div>

        {/* Right Section */}
        <div className="right-section">
          <h1>{language === 'English' ? 'Aple E-Suvidha Kendra' : 'आपले ई-सुविधा केंद्र'}</h1>
          <h2>{language === 'English' ? 'Welcome Back!' : 'परत स्वागत आहे!'}</h2>
          <p>
            {language === 'English'
              ? 'Your one-stop portal for government services.'
              : 'सरकारी सेवांसाठी तुमचे एकच ठिकाण.'}
          </p>
          <img
            className="illustration"
            src="https://www.svgrepo.com/show/331352/login.svg"
            alt="Illustration"
          />
          <p className="tagline">
            {language === 'English'
              ? 'Empowering Digital India.'
              : 'डिजिटल भारताला सबल बनवित आहे.'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
