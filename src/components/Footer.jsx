import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: '#1A1A1A',
      color: '#FAF7F2',
      padding: '3rem 2rem',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '2rem'
      }}>
        {/* Logo and Contact */}
        <div>
          <img 
            src="/images/iteration-2-images/footer/logo-footer.svg" 
            alt="Teknolojik Yemekler"
            style={{
              width: '200px',
              marginBottom: '1.5rem'
            }}
          />
          <div style={{ marginBottom: '1rem' }}>
            <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <img src="/images/iteration-2-images/footer/icons/icon-1.png" alt="Location" style={{ width: '24px', height: '24px' }} />
              391 Londonderry Road<br />İstanbul Türkiye
            </p>
            <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <img src="/images/iteration-2-images/footer/icons/icon-2.png" alt="Email" style={{ width: '24px', height: '24px' }} />
              aciktim@teknolojiyemekler.com
            </p>
            <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <img src="/images/iteration-2-images/footer/icons/icon-3.png" alt="Phone" style={{ width: '24px', height: '24px' }} />
              +90 216 123 45 67
            </p>
          </div>
        </div>

        {/* Hot Menu */}
        <div>
          <h3 style={{
            fontFamily: '"Barlow", sans-serif',
            fontSize: '1.2rem',
            marginBottom: '1rem',
            color: '#FAF7F2'
          }}>Hot Menu</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '0.5rem' }}>Terminal Pizza</li>
            <li style={{ marginBottom: '0.5rem' }}>5 K-işilik Hackathlon Pizza</li>
            <li style={{ marginBottom: '0.5rem' }}>useEffect Tavuklu Pizza</li>
            <li style={{ marginBottom: '0.5rem' }}>Beyaz Console Frosty</li>
            <li style={{ marginBottom: '0.5rem' }}>Testler Geçti Mutlu Burger</li>
            <li>Position Absolute Acı Burger</li>
          </ul>
        </div>

        {/* Instagram */}
        <div>
          <h3 style={{
            fontFamily: '"Barlow", sans-serif',
            fontSize: '1.2rem',
            marginBottom: '1rem',
            color: '#FAF7F2'
          }}>Instagram</h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '0.5rem'
          }}>
            {[0, 1, 2, 3, 4, 5].map((index) => (
              <img 
                key={index}
                src={`/images/iteration-2-images/footer/insta/li-${index}.png`}
                alt={`Instagram ${index + 1}`}
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '4px'
                }}
              />
            ))}
          </div>
        </div>
      </div>
      <div style={{
        borderTop: '1px solid #2A2A2A',
        marginTop: '2rem',
        paddingTop: '1rem',
        textAlign: 'center',
        color: '#5F5F5F'
      }}>
        © 2023 Teknolojik Yemekler
      </div>
    </footer>
  );
};

export default Footer;
