import React from 'react';
import { Link } from 'react-router-dom';
import Menu from './Menu';
import Promotions from './Promotions';
import Footer from './Footer';

const IconBar = () => {
  const isMobile = window.innerWidth <= 768;
  
  return (
  <div style={{
    backgroundColor: '#FAF7F2',
    padding: '1rem',
    overflowX: 'auto',
    borderBottom: '1px solid #eee',
    WebkitOverflowScrolling: 'touch',
    msOverflowStyle: '-ms-autohiding-scrollbar'
  }}>
    <div style={{
      display: 'flex',
      gap: '2rem',
      minWidth: isMobile ? 'max-content' : 'auto',
      justifyContent: 'center'
    }}>

    {['HTML Kova', 'Pizza', 'Burger', 'Kahvaltılık', 'Fast Food', 'Özel Menü'].map((item, index) => (
      <div key={index} style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        color: '#292929',
        cursor: 'pointer'
      }}>
        <img 
          src={`/images/iteration-2-images/icons/${index + 1}.svg`}
          alt={item}
          style={{ width: '24px', height: '24px' }}
        />
        <span style={{ fontFamily: '"Barlow", sans-serif' }}>{item}</span>
      </div>
    ))}
    </div>
  </div>
  );
};

const Home = () => {
  const isMobile = window.innerWidth <= 768;

  return (
    <div style={{ minHeight: '100vh', overflowX: 'hidden' }}>
      <div className="hero" style={{
        backgroundImage: 'url(/images/iteration-1-images/home-banner.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: isMobile ? '60vh' : '80vh',
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
          fontFamily: '"Quattrocento", serif',
          color: '#FAF7F2',
          fontSize: isMobile ? '2rem' : '2.5rem',
          marginBottom: '0.5rem',
          textAlign: 'center'
        }}>
          Teknolojik Yemekler
        </h1>
        <p style={{
          fontFamily: '"Satisfy", cursive',
          color: '#FDC913',
          fontSize: '1.5rem',
          margin: '0.5rem 0 1.5rem'
        }}>
          {'fırsatı kaçırma'}
        </p>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem'
        }}>
          <h2 style={{
            fontFamily: '"Barlow", sans-serif',
            color: '#FAF7F2',
            fontSize: isMobile ? '2.5rem' : '3.5rem',
            textAlign: 'center',
            margin: '0',
            letterSpacing: '2px',
            textShadow: '2px 2px 4px rgba(0,0,0,0.2)'
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
              fontFamily: '"Barlow", sans-serif',
              fontWeight: '600',
              fontSize: '1.1rem',
              letterSpacing: '1px',
              transition: 'all 0.3s ease',
              ':hover': {
                transform: 'scale(1.05)',
                backgroundColor: '#FAF7F2'
              }
            }}
          >
            AÇIKTIM
          </Link>
        </div>
      </div>

      <IconBar />
      <Promotions />
      <Menu />
      <Footer />
    </div>
  );
};

export default Home;
