import React from 'react';
import { Link } from 'react-router-dom';

const Success = () => {
  return (
    <div style={{
      backgroundColor: '#CE2829',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      textAlign: 'center',
      position: 'relative'
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
        marginBottom: '1rem',
        fontSize: '2.5rem'
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
          fontFamily: '"Satisfy", cursive',
          color: '#FAF7F2',
          fontSize: '4rem',
          margin: '0',
          textShadow: '2px 2px 4px rgba(0,0,0,0.2)'
        }}>
          Tebrikler!
        </h2>
        <h3 style={{
          fontFamily: '"Roboto Condensed", sans-serif',
          color: '#FAF7F2',
          fontSize: '3rem',
          margin: '0',
          letterSpacing: '2px',
          fontWeight: '700'
        }}>
          SİPARİŞİNİZ ALINDI!
        </h3>
        <Link 
          to="/" 
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
            marginTop: '2rem',
            transition: 'all 0.3s ease',
            ':hover': {
              transform: 'scale(1.05)',
              backgroundColor: '#FAF7F2'
            }
          }}
        >
          ANA SAYFAYA DÖN
        </Link>
      </div>
    </div>
  );
};

export default Success;
