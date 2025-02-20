import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';

const LandingPage = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div style={{
      backgroundImage: `url('https://static.startuptalky.com/2022/05/online-auction-websites-StartupTalky--1-.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{
        backdropFilter: 'blur(8px)',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: '2rem',
        borderRadius: '15px',
        maxWidth: '800px',
        margin: '1rem'
      }}>
        <h1 style={{ color: 'white', marginBottom: '2rem' }}>
          Welcome to Bid-Wise – The Smart Way to Bid!
        </h1>
        <p style={{ color: 'white', fontSize: '1.1rem', marginBottom: '2rem' }}>
          Bid-Wise is a cutting-edge e-auction platform designed to connect buyers and sellers in a seamless, transparent, and competitive bidding environment. Whether you're looking to sell assets, procure goods, or participate in exclusive auctions, Bid-Wise ensures a secure and efficient experience for all users.
          <br /><br />
          Start bidding smartly with real-time updates, fair pricing, and a user-friendly interface. Join today and make every bid count!
        </p>
        <div style={{
          backgroundColor: '#6f42c1',
          padding: '1.5rem',
          borderRadius: '10px',
          display: 'inline-block'
        }}>
          <Link to="/signup">
            <Button variant="light" size="lg" className="me-3" style={{ margin: '0.5rem' }}>
              Sign Up
            </Button>
          </Link>
          <Link to="/login">
            <Button variant="light" size="lg" style={{ margin: '0.5rem' }}>
              Login
            </Button>
          </Link>
        </div>
        <p style={{ color: 'white', marginTop: '2rem' }}>
          © {currentYear} Bid-Wise. All Rights Reserved.
        </p>
      </div>
    </div>

  );
};

export default LandingPage;
