import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const OrderForm = () => {
  const history = useHistory();
  const [formData, setFormData] = useState({
    name: '',
    size: 'medium',
    toppings: [],
    notes: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toppings = [
    'Pepperoni', 'Sucuk', 'Kaşarlı Jambon',
    'Tavuk Izgara', 'Soğan', 'Domates',
    'Mantar', 'Biber', 'Sucuk',
    'Zeytin', 'Mısır'
  ];

  const validateForm = () => {
    const errors = {};
    if (!formData.name || formData.name.length < 3) {
      errors.name = 'İsim en az 3 karakter olmalıdır';
    }
    if (formData.toppings.length < 4) {
      errors.toppings = 'En az 4 malzeme seçmelisiniz';
    }
    if (formData.toppings.length > 10) {
      errors.toppings = 'En fazla 10 malzeme seçebilirsiniz';
    }
    return errors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleToppingChange = (topping) => {
    setFormData(prev => {
      const currentToppings = prev.toppings.includes(topping)
        ? prev.toppings.filter(t => t !== topping)
        : [...prev.toppings, topping];
      
      return {
        ...prev,
        toppings: currentToppings
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      setIsSubmitting(true);
      try {
        const response = await axios.post('https://reqres.in/api/pizza', formData);
        console.log('Sipariş özeti:', response.data);
        history.push('/success', { orderData: formData });
      } catch (error) {
        console.error('Sipariş hatası:', error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div>
      <div style={{
        backgroundImage: 'url(/images/iteration-2-images/pictures/form-banner.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '200px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '2rem'
      }}>
        <h1 style={{
          color: '#FAF7F2',
          fontFamily: '"Quattrocento", serif',
          fontSize: '2.5rem',
          textAlign: 'center',
          textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
        }}>Sipariş Ver</h1>
      </div>

      <div style={{ maxWidth: '600px', margin: '0 auto', padding: '2rem' }}>
        <h2 style={{ color: '#292929', fontFamily: '"Barlow", sans-serif', marginBottom: '1.5rem' }}>Pizza Siparişi</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '1.5rem' }}>
            <label htmlFor="name" style={{ color: '#5F5F5F', fontFamily: '"Barlow", sans-serif', display: 'block', marginBottom: '0.5rem' }}>İsminiz *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              style={{
                width: '100%',
                padding: '0.75rem',
                marginTop: '0.5rem',
                border: '1px solid #5F5F5F',
                borderRadius: '4px',
                fontSize: '1rem'
              }}
            />
            {formErrors.name && <span style={{ color: '#CE2829', fontSize: '0.875rem', marginTop: '0.25rem', display: 'block' }}>{formErrors.name}</span>}
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ color: '#5F5F5F', fontFamily: '"Barlow", sans-serif', display: 'block', marginBottom: '0.5rem' }}>Boyut *</label>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              {['small', 'medium', 'large'].map(size => (
                <label key={size} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                  <input
                    type="radio"
                    name="size"
                    value={size}
                    checked={formData.size === size}
                    onChange={handleInputChange}
                    style={{ cursor: 'pointer' }}
                  />
                  <span style={{ fontFamily: '"Barlow", sans-serif' }}>
                    {size === 'small' ? 'Küçük' : size === 'medium' ? 'Orta' : 'Büyük'}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ color: '#5F5F5F', fontFamily: '"Barlow", sans-serif', display: 'block', marginBottom: '0.5rem' }}>Malzemeler (4-10 arası seçim yapınız) *</label>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', 
              gap: '0.75rem',
              marginTop: '0.5rem' 
            }}>
              {toppings.map(topping => (
                <label key={topping} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                  <input
                    type="checkbox"
                    checked={formData.toppings.includes(topping)}
                    onChange={() => handleToppingChange(topping)}
                    style={{ cursor: 'pointer' }}
                  />
                  <span style={{ fontFamily: '"Barlow", sans-serif' }}>{topping}</span>
                </label>
              ))}
            </div>
            {formErrors.toppings && <span style={{ color: '#CE2829', fontSize: '0.875rem', marginTop: '0.25rem', display: 'block' }}>{formErrors.toppings}</span>}
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label htmlFor="notes" style={{ color: '#5F5F5F', fontFamily: '"Barlow", sans-serif', display: 'block', marginBottom: '0.5rem' }}>Notlar</label>
            <textarea
              id="notes"
              name="notes"
              value={formData.notes}
              onChange={handleInputChange}
              style={{
                width: '100%',
                padding: '0.75rem',
                marginTop: '0.5rem',
                border: '1px solid #5F5F5F',
                borderRadius: '4px',
                minHeight: '120px',
                fontSize: '1rem',
                resize: 'vertical'
              }}
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            style={{
              backgroundColor: '#FDC913',
              color: '#292929',
              padding: '0.75rem 2rem',
              border: 'none',
              borderRadius: '4px',
              cursor: isSubmitting ? 'not-allowed' : 'pointer',
              opacity: isSubmitting ? 0.7 : 1,
              fontFamily: '"Barlow", sans-serif',
              fontSize: '1rem',
              fontWeight: '600',
              transition: 'all 0.3s ease',
              ':hover': {
                backgroundColor: '#FAF7F2'
              }
            }}
          >
            {isSubmitting ? 'Sipariş Gönderiliyor...' : 'Sipariş Ver'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default OrderForm;
