import React, { useState, useEffect } from 'react';
import axios from 'axios';

const OrderForm = () => {
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
      } catch (error) {
        console.error('Sipariş hatası:', error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '2rem' }}>
      <h2 style={{ color: '#292929' }}>Pizza Siparişi</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="name" style={{ color: '#5F5F5F' }}>İsminiz *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            style={{
              width: '100%',
              padding: '0.5rem',
              marginTop: '0.5rem',
              border: '1px solid #5F5F5F'
            }}
          />
          {formErrors.name && <span style={{ color: '#CE2829' }}>{formErrors.name}</span>}
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label style={{ color: '#5F5F5F' }}>Boyut *</label>
          <div>
            {['small', 'medium', 'large'].map(size => (
              <label key={size} style={{ marginRight: '1rem' }}>
                <input
                  type="radio"
                  name="size"
                  value={size}
                  checked={formData.size === size}
                  onChange={handleInputChange}
                />
                {size.charAt(0).toUpperCase() + size.slice(1)}
              </label>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label style={{ color: '#5F5F5F' }}>Malzemeler (4-10 arası seçim yapınız) *</label>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem' }}>
            {toppings.map(topping => (
              <label key={topping}>
                <input
                  type="checkbox"
                  checked={formData.toppings.includes(topping)}
                  onChange={() => handleToppingChange(topping)}
                />
                {topping}
              </label>
            ))}
          </div>
          {formErrors.toppings && <span style={{ color: '#CE2829' }}>{formErrors.toppings}</span>}
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="notes" style={{ color: '#5F5F5F' }}>Notlar</label>
          <textarea
            id="notes"
            name="notes"
            value={formData.notes}
            onChange={handleInputChange}
            style={{
              width: '100%',
              padding: '0.5rem',
              marginTop: '0.5rem',
              border: '1px solid #5F5F5F',
              minHeight: '100px'
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
            opacity: isSubmitting ? 0.7 : 1
          }}
        >
          {isSubmitting ? 'Sipariş Gönderiliyor...' : 'Sipariş Ver'}
        </button>
      </form>
    </div>
  );
};

export default OrderForm;
