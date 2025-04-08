import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Success = () => {
  const location = useLocation();
  const orderData = location.state?.orderData || {
    name: 'Sipper broş',
    size: 'L',
    toppings: ['Pepperoni', 'Sosis', 'Mısır', 'Ananas', 'Jalepeno']
  };

  const prices = {
    seçimler: 25.00,
    toplam: 110.50
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#CE2829',
      color: '#FAF7F2',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '4rem 2rem'
    }}>
      <h1 style={{
        fontFamily: '"Barlow", sans-serif',
        fontSize: '2.5rem',
        marginBottom: '0.5rem'
      }}>Teknolojik Yemekler</h1>

      <p style={{
        fontFamily: '"Satisfy", cursive',
        fontSize: '1.5rem',
        color: '#FDC913',
        marginBottom: '2rem'
      }}>
        lezzetliz yolda.
      </p>

      <h2 style={{
        fontFamily: '"Barlow", sans-serif',
        fontSize: '3.5rem',
        marginBottom: '2rem',
        textAlign: 'center'
      }}>
        SİPARİŞ ALINDI
      </h2>

      <div style={{
        width: '100%',
        maxWidth: '600px',
        marginBottom: '2rem'
      }}>
        <h3 style={{
          fontFamily: '"Barlow", sans-serif',
          fontSize: '1.5rem',
          marginBottom: '1rem'
        }}>
          Position Absolute Acı Pizza
        </h3>

        <div style={{ marginBottom: '1rem' }}>
          <p style={{ marginBottom: '0.5rem' }}>Boyut: {orderData.size}</p>
          <p style={{ marginBottom: '0.5rem' }}>Hamur: {orderData.name}</p>
          <div>
            <p style={{ marginBottom: '0.5rem' }}>Ek Malzemeler:</p>
            <p>{orderData.toppings.join(', ')}</p>
          </div>
        </div>

        <div style={{
          border: '1px solid rgba(255,255,255,0.2)',
          borderRadius: '8px',
          padding: '1rem',
          marginTop: '2rem'
        }}>
          <h4 style={{
            fontFamily: '"Barlow", sans-serif',
            fontSize: '1.2rem',
            marginBottom: '1rem'
          }}>
            Sipariş Toplamı
          </h4>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '0.5rem'
          }}>
            <span>Seçimler</span>
            <span>{prices.seçimler.toFixed(2)}₺</span>
          </div>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            borderTop: '1px solid rgba(255,255,255,0.2)',
            paddingTop: '0.5rem',
            marginTop: '0.5rem'
          }}>
            <span>Toplam</span>
            <span>{prices.toplam.toFixed(2)}₺</span>
          </div>
        </div>
      </div>

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
          fontSize: '1rem',
          transition: 'all 0.3s ease',
          ':hover': {
            backgroundColor: '#FAF7F2'
          }
        }}
      >
        Ana Sayfaya Dön
      </Link>
    </div>
  );
};

export default Success;
