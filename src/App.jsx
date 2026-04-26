import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero3D from './components/Hero3D';
import ProductCarousel3D from './components/ProductCarousel3D';
import BeautyRitual from './components/BeautyRitual';
import MoodBoard from './components/MoodBoard';
import EmotionMap from './components/EmotionMap';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import FloatingCart from './components/FloatingCart';
import Notification from './components/Notification';

function App() {
  const [cart, setCart] = useState([]);
  const [notification, setNotification] = useState({ visible: false, message: '', type: 'success' });

  // Анимация при скролле
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Загрузка корзины
  useEffect(() => {
    const savedCart = localStorage.getItem('luxeCart');
    if (savedCart) setCart(JSON.parse(savedCart));
  }, []);

  // Сохранение корзины
  useEffect(() => {
    localStorage.setItem('luxeCart', JSON.stringify(cart));
  }, [cart]);

  const showNotification = (message, type = 'success') => {
    setNotification({ visible: true, message, type });
  };

  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        showNotification(`✓ ${product.name} добавлен в корзину (${existing.quantity + 1} шт.)`, 'success');
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      showNotification(`✨ ${product.name} добавлен в корзину`, 'success');
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    const product = cart.find(item => item.id === id);
    if (product) {
      showNotification(`🗑️ ${product.name} удалён из корзины`, 'warning');
    }
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }
    setCart(prev => prev.map(item => item.id === id ? { ...item, quantity } : item));
  };

  const clearCart = () => setCart([]);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="bg-black">
      <Navbar />
      <Hero3D />
      <ProductCarousel3D onAddToCart={addToCart} />
      <BeautyRitual />
      <MoodBoard />
      <EmotionMap />
      <Testimonials />
      <Footer />
      <FloatingCart 
        cart={cart}
        setCart={setCart}
        onRemoveFromCart={removeFromCart}
        onUpdateQuantity={updateQuantity}
        onClearCart={clearCart}
        cartCount={cartCount}
      />
      <Notification 
        visible={notification.visible}
        message={notification.message}
        type={notification.type}
        onClose={() => setNotification({ ...notification, visible: false })}
      />
    </div>
  );
}

export default App;