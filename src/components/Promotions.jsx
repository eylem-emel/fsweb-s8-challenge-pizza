import React from 'react';
import { Link } from 'react-router-dom';

const PromotionCard = ({ image, title, subtitle, buttonText }) => {
  const isMobile = window.innerWidth <= 768;

  return (
  <div style={{
    borderRadius: '12px',
    overflow: 'hidden',
    position: 'relative',
    height: isMobile ? '200px' : '300px'
  }}>
    <img 
      src={image} 
      alt={title}
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover'
      }}
    />
    <div style={{
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      padding: '2rem',
      background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
      color: '#FAF7F2'
    }}>
      <h3 style={{
        fontFamily: '"Barlow", sans-serif',
        fontSize: isMobile ? '1.2rem' : '1.5rem',
        marginBottom: '0.5rem'
      }}>{title}</h3>
      <p style={{
        fontFamily: '"Roboto Condensed", sans-serif',
        opacity: 0.9,
        marginBottom: '1rem'
      }}>{subtitle}</p>
      <Link 
        to="/order"
        style={{
          backgroundColor: '#FDC913',
          color: '#292929',
          padding: isMobile ? '0.5rem 1rem' : '0.75rem 1.5rem',
          borderRadius: '4px',
          textDecoration: 'none',
          display: 'inline-block',
          fontFamily: '"Barlow", sans-serif',
          fontWeight: '600',
          transition: 'all 0.3s ease',
          ':hover': {
            transform: 'scale(1.05)',
            backgroundColor: '#FAF7F2'
          }
        }}
      >
        {buttonText}
      </Link>
    </div>
  </div>
  );
};

const Promotions = () => {
  const isMobile = window.innerWidth <= 768;
  const promotions = [
    {
      image: '/images/iteration-2-images/cta/kart-1.png',
      title: 'Özel Lezzetus',
      subtitle: 'Position Absolute Acı Burger',
      buttonText: 'HEMEN AL'
    },
    {
      image: '/images/iteration-2-images/cta/kart-2.png',
      title: 'Hackathlon Burger Menü',
      subtitle: '5 K-işilik Hackathlon Pizza',
      buttonText: 'DENE'
    },
    {
      image: '/images/iteration-2-images/cta/kart-3.png',
      title: 'Docookk hızlı',
      subtitle: 'npm gibi kurye',
      buttonText: 'SİPARİŞ VER'
    }
  ];

  return (
    <section style={{
      padding: '2rem',
      backgroundColor: '#FAF7F2'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem'
      }}>
        {promotions.map((promo, index) => (
          <PromotionCard key={index} {...promo} />
        ))}
      </div>
    </section>
  );
};

export default Promotions;
