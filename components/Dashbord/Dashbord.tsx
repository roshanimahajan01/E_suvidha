import React from 'react';
import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import '../Dashbord/Dashbord.scss';

const Dashboard = (): JSX.Element => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/');
  };

  const tiles = [
    { title: 'E-Government Service', icon: 'https://tse4.mm.bing.net/th?id=OIP.Udp0pVoFGuRwUoP9vqmMowHaFu&pid=Api&P=0&h=180', link: '/egov' },
    { title: 'GST New application', icon: 'https://tse4.mm.bing.net/th?id=OIP.FplyXwwA5JFSBgz6ik4_WgHaFj&pid=Api&P=0&h=180', link: '/gst' },
    { title: 'Application Service', icon: 'https://global-uploads.webflow.com/5e157548d6f7910beea4e2d6/62dea567b7a57ee20b5ddb56_free-government-logo-p-500.png', link: '/app-service' },
    { title: 'Business Document', icon: 'https://cdn.pixabay.com/photo/2023/06/01/13/05/documents-logo-8033573_1280.png', link: '/business-document' },
    { title: 'Company Portal', icon: 'https://tse1.mm.bing.net/th?id=OIP.PUUHHJPlthkQCMNsz6l6PgHaHa&pid=Api&P=0&h=180', link: '/company-portal' },
    { title: 'Trust Registration', icon: 'https://tse2.mm.bing.net/th?id=OIP.Rfj_rDXsbKRBz90ASEdWHwHaFI&pid=Api&P=0&h=180', link: '/trust-registration' },
    { title: 'Loan Service', icon: 'loan-service-icon.png', link: '/loan-service' },
    { title: 'Insurance Service', icon: 'insurance-service-icon.png', link: '/insurance-service' },
    { title: 'Tax & GST Application', icon: 'tax-gst-icon.png', link: '/tax-gst-application' },
    { title: 'PF & ESIC Registration', icon: 'pf-esic-icon.png', link: '/pf-esic-registration' },
    { title: 'Rental Agreement Service', icon: 'rental-agreement-icon.png', link: '/rental-agreement-service' },
    { title: 'Bank Service', icon: 'https://static.vecteezy.com/system/resources/previews/000/354/777/original/bank-vector-icon.jpg', link: '/bank-service' },
    { title: 'Recharge & Bill Services', icon: 'recharge-bill-icon.png', link: '/recharge-bill-services' },
    { title: 'Ticket Booking', icon: 'ticket-booking-icon.png', link: '/ticket-booking' },
    { title: 'Other Service', icon: 'other-service-icon.png', link: '/other-service' },
  ];

  return (
    <div className="dashboard-container">
      <div className="tiles-container">
        {tiles.map((tile, index) => (
          <div
            className="tile"
            key={index}
            onClick={() => navigate(tile.link)}
          >
            <Avatar
              src={tile.icon}
              alt={tile.title}
              className="tile-icon"
            />
            <h3 className="tile-title">{tile.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
