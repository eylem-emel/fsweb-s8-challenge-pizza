import React from 'react';

const MenuItem = ({ image, title, rating, reviews, price }) => {
  const isMobile = window.innerWidth <= 768;
  
  return (
  <div style={{
    backgroundColor: '#FAF7F2',
    borderRadius: '12px',
    padding: isMobile ? '0.75rem' : '1rem',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }}>
    <img 
      src={image} 
      alt={title}
      style={{
        width: '100%',
        height: 'auto',
        borderRadius: '50%',
        marginBottom: '1rem'
      }}
    />
    <h3 style={{
      fontFamily: '"Barlow", sans-serif',
      fontSize: isMobile ? '1rem' : '1.2rem',
      marginBottom: '0.5rem',
      textAlign: 'center'
    }}>{title}</h3>
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      marginBottom: '0.5rem'
    }}>
      <span style={{ fontWeight: 'bold' }}>{rating}</span>
      <span style={{ color: '#5F5F5F' }}>({reviews})</span>
      <span style={{ fontWeight: 'bold' }}>{price}₺</span>
    </div>
  </div>
  );
};

const CategoryButton = ({ icon, text }) => {
  const isMobile = window.innerWidth <= 768;
  
  return (
    <button style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: isMobile ? '0.25rem' : '0.5rem',
      padding: isMobile ? '0.25rem' : '0.5rem 1rem',
      border: 'none',
      background: 'transparent',
      color: '#292929',
      fontSize: isMobile ? '0.8rem' : '0.9rem',
      fontFamily: '"Barlow", sans-serif',
      cursor: 'pointer',
      width: '100%'
    }}>
      <img src={`/images/iteration-2-images/icons/${icon}.svg`} alt={text} style={{ width: '24px', height: '24px' }} />
      <span>{text}</span>
    </button>
  );
};

const Menu = () => {
  const isMobile = window.innerWidth <= 768;
  
  const categories = [
    { icon: '1', text: 'HTML Kova' },
    { icon: '2', text: 'Pizza' },
    { icon: '3', text: 'Burger' },
    { icon: '4', text: 'Kahvaltılık' },
    { icon: '5', text: 'Fast Food' },
    { icon: '6', text: 'Özel Menü' }
  ];
  const menuItems = [
    {
      image: '/images/iteration-2-images/pictures/food-1.png',
      title: 'Terminal Pizza',
      rating: '4.9',
      reviews: '200',
      price: '60'
    },
    {
      image: '/images/iteration-2-images/pictures/food-2.png',
      title: 'Position Absolute Acı Pizza',
      rating: '4.9',
      reviews: '200',
      price: '60'
    },
    {
      image: '/images/iteration-2-images/pictures/food-3.png',
      title: 'useEffect Tavuklu Burger',
      rating: '4.9',
      reviews: '200',
      price: '60'
    }
  ];

  return (
    <section style={{
      padding: isMobile ? '2rem 1rem' : '4rem 2rem',
      backgroundImage: 'url(/images/iteration-1-images/banner.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <h2 style={{
          fontFamily: '"Satisfy", cursive',
          fontSize: isMobile ? '1.5rem' : '2rem',
          color: '#CE2829',
          textAlign: 'center',
          marginBottom: '0.5rem'
        }}>en çok performans alanlar</h2>
        <h3 style={{
          fontFamily: '"Barlow", sans-serif',
          fontSize: isMobile ? '1.75rem' : '2.5rem',
          color: '#292929',
          textAlign: 'center',
          marginBottom: '2rem'
        }}>Acıktıran Kodlara Doyuran Lezzetler</h3>
        
        <div style={{
          width: '100%',
          marginBottom: '2rem'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? 'repeat(3, 1fr)' : 'repeat(6, auto)',
            gap: isMobile ? '0.5rem' : '1rem',
            justifyContent: 'center',
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0.5rem'
          }}>
            {categories.map((category, index) => (
              <CategoryButton key={index} {...category} />
            ))}
          </div>
        </div>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? 'repeat(1, 1fr)' : 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem'
        }}>
          {menuItems.map((item, index) => (
            <MenuItem key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
