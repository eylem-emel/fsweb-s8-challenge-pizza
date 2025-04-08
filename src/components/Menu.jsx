import React from 'react';

const MenuItem = ({ image, title, rating, reviews, price }) => (
  <div style={{
    backgroundColor: '#FAF7F2',
    borderRadius: '12px',
    padding: '1rem',
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
      fontSize: '1.2rem',
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

const Menu = () => {
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
      padding: '4rem 2rem',
      backgroundColor: '#FAF7F2'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <h2 style={{
          fontFamily: '"Satisfy", cursive',
          fontSize: '2rem',
          color: '#CE2829',
          textAlign: 'center',
          marginBottom: '0.5rem'
        }}>en çok performans alanlar</h2>
        <h3 style={{
          fontFamily: '"Barlow", sans-serif',
          fontSize: '2.5rem',
          color: '#292929',
          textAlign: 'center',
          marginBottom: '3rem'
        }}>Acıktıran Kodlara Doyuran Lezzetler</h3>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
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
