import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="hero" style={{
      backgroundImage: 'url(/images/iteration-1-images/home-banner.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      padding: '2rem'
    }}>
      <img 
        src="/images/iteration-1-images/logo.svg" 
        alt="Teknolojik Yemekler Logo" 
        style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          width: '60px'
        }}
      />
      <h1 style={{
        fontFamily: '"Roboto Condensed", sans-serif',
        color: '#FAF7F2',
        fontSize: '2rem',
        marginBottom: '0.5rem'
      }}>
        Teknolojik Yemekler
      </h1>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1rem'
      }}>
        <h2 style={{
          fontFamily: '"Barlow", sans-serif',
          color: '#FAF7F2',
          fontSize: '3rem',
          textAlign: 'center',
          margin: '0',
          letterSpacing: '2px'
        }}>
          KOD AÇIKTIRIR
          <br />
          PİZZA, DOYURUR
        </h2>
        <Link 
          to="/order" 
          style={{
            backgroundColor: '#FDC913',
            color: '#292929',
            padding: '0.75rem 2rem',
            borderRadius: '4px',
            textDecoration: 'none',
            display: 'inline-block',
            fontFamily: '"Roboto Condensed", sans-serif',
            fontWeight: '700',
            fontSize: '1.1rem',
            letterSpacing: '1px',
            transition: 'transform 0.2s ease',
            ':hover': {
              transform: 'scale(1.05)'
            }
          }}
        >
          AÇIKTIM
        </Link>
      </div>
    </div>
  );
};

export default Home;
