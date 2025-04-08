import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: '#1A1A1A',
      color: '#FAF7F2',
      padding: '2rem'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start'
      }}>
        {/* Logo and Contact */}
        <div style={{ flex: '0 0 auto' }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}>
            <img 
              src="/images/iteration-2-images/footer/logo-footer.svg" 
              alt="Teknolojik Yemekler"
              style={{
                height: '40px',
                objectFit: 'contain'
              }}
            />
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.5rem',
              color: '#A3A3A3'
            }}>
              <img 
                src="/images/iteration-2-images/footer/icons/icon-1.png" 
                alt="Location" 
                style={{ width: '24px', height: '24px' }}
              />
              <span>391 Londonderry Road,<br />İstanbul Türkiye</span>
            </div>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.5rem',
              color: '#A3A3A3'
            }}>
              <img 
                src="/images/iteration-2-images/footer/icons/icon-2.png" 
                alt="Email" 
                style={{ width: '24px', height: '24px' }}
              />
              <span>aciktim@teknolojiyemekler.com</span>
            </div>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.5rem',
              color: '#A3A3A3'
            }}>
              <img 
                src="/images/iteration-2-images/footer/icons/icon-3.png" 
                alt="Phone" 
                style={{ width: '24px', height: '24px' }}
              />
              <span>90 212 234 56 67</span>
            </div>
          </div>
        </div>

        {/* Hot Menu */}
        <div style={{ flex: '0 0 auto' }}>
          <h3 style={{ 
            fontFamily: '"Barlow", sans-serif',
            fontSize: '1.25rem',
            marginBottom: '1rem'
          }}>Hot Menu</h3>
          <ul style={{ 
            listStyle: 'none', 
            padding: 0,
            margin: 0,
            color: '#A3A3A3'
          }}>
            <li style={{ marginBottom: '0.5rem' }}>Termine Pizza</li>
            <li style={{ marginBottom: '0.5rem' }}>5 K-işilik Hackathlon Pizza</li>
            <li style={{ marginBottom: '0.5rem' }}>useEffect Tavuklu Pizza</li>
            <li style={{ marginBottom: '0.5rem' }}>Beyaz Console Frosty</li>
            <li style={{ marginBottom: '0.5rem' }}>Tester Spect Mutlu Burger</li>
            <li>Position Absolute Acı Burger</li>
          </ul>
        </div>

        {/* Instagram */}
        <div style={{ flex: '0 0 auto' }}>
          <h3 style={{ 
            fontFamily: '"Barlow", sans-serif',
            fontSize: '1.25rem',
            marginBottom: '1rem'
          }}>Instagram</h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 100px)',
            gap: '0.5rem'
          }}>
            {[0, 1, 2, 3, 4, 5].map((index) => (
              <img 
                key={index}
                src={`/images/iteration-2-images/footer/insta/li-${index}.png`}
                alt={`Instagram ${index + 1}`}
                style={{
                  width: '100%',
                  height: '100px',
                  objectFit: 'cover',
                  borderRadius: '4px'
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
