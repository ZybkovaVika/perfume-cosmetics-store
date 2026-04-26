import { useState, useEffect } from 'react';
import { ShoppingBag, X, Trash2, Plus, Minus } from 'lucide-react';

const FloatingCart = ({ cart, setCart, onRemoveFromCart, onUpdateQuantity, onClearCart, cartCount }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', address: '' });

  const total = cart.reduce((s, i) => s + i.price * i.quantity, 0);

  const updateQuantity = (id, delta) => {
    const item = cart.find(p => p.id === id);
    if (item) {
      const newQuantity = Math.max(1, item.quantity + delta);
      const updatedCart = cart.map(p => p.id === id ? { ...p, quantity: newQuantity } : p);
      setCart(updatedCart);
    }
  };

  const removeItem = (id) => {
    setCart(cart.filter(p => p.id !== id));
  };

  const submitOrder = () => {
    if (!form.name || !form.phone) return alert('Заполните поля');
    const order = { id: Date.now(), date: new Date(), customer: form, items: cart, total: total };
    const history = JSON.parse(localStorage.getItem('luxeOrders') || '[]');
    history.push(order);
    localStorage.setItem('luxeOrders', JSON.stringify(history));
    setCart([]);
    setShowCheckout(false);
    setIsOpen(false);
    alert('Заказ оформлен! Мы свяжемся с вами.');
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#D4AF37] text-black flex items-center justify-center shadow-2xl hover:scale-110 transition duration-300"
      >
        <ShoppingBag className="w-6 h-6" />
        {cart.length > 0 && <span className="absolute -top-1 -right-1 w-5 h-5 bg-black text-[#D4AF37] text-xs rounded-full flex items-center justify-center">{cart.reduce((s,i)=>s+i.quantity,0)}</span>}
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 bg-black/70 z-50" onClick={() => setIsOpen(false)} />
          <div className="fixed top-0 right-0 w-full max-w-md h-full bg-gray-950 z-50 shadow-2xl flex flex-col animate-slide-in-right">
            <div className="p-5 border-b border-white/10 flex justify-between items-center">
              <h2 className="text-xl font-serif text-white">Корзина</h2>
              <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white"><X className="w-5 h-5" /></button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              {cart.length === 0 ? (
                <p className="text-center text-gray-500 py-12">Корзина пуста</p>
              ) : (
                cart.map(item => (
                  <div key={item.id} className="flex gap-4 pb-4 border-b border-white/10">
                    <img src={item.image} className="w-20 h-20 object-cover rounded-lg" />
                    <div className="flex-1">
                      <p className="text-white font-medium">{item.name}</p>
                      <p className="text-[#D4AF37] text-sm">{item.price.toLocaleString()}₽</p>
                      <div className="flex items-center gap-3 mt-2">
                        <button onClick={() => updateQuantity(item.id, -1)} className="w-7 h-7 border border-gray-700 rounded-full hover:border-[#D4AF37]"><Minus className="w-3 h-3 mx-auto text-white" /></button>
                        <span className="text-white text-sm">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, 1)} className="w-7 h-7 border border-gray-700 rounded-full hover:border-[#D4AF37]"><Plus className="w-3 h-3 mx-auto text-white" /></button>
                        <button onClick={() => removeItem(item.id)} className="ml-auto text-gray-500 hover:text-red-500"><Trash2 className="w-4 h-4" /></button>
                      </div>
                    </div>
                    <div className="text-right"><span className="text-white font-medium">{(item.price * item.quantity).toLocaleString()}₽</span></div>
                  </div>
                ))
              )}
            </div>
            
            {cart.length > 0 && (
              <div className="p-5 border-t border-white/10">
                <div className="flex justify-between mb-4"><span className="text-gray-400">Итого</span><span className="text-2xl text-[#D4AF37] font-bold">{total.toLocaleString()}₽</span></div>
                {!showCheckout ? (
                  <button onClick={() => setShowCheckout(true)} className="w-full bg-[#D4AF37] text-black py-3 rounded-full font-semibold hover:bg-[#D4AF37]/80 transition">Оформить заказ</button>
                ) : (
                  <div className="space-y-3">
                    <input type="text" placeholder="Имя" value={form.name} onChange={e => setForm({...form, name: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white" />
                    <input type="tel" placeholder="Телефон" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white" />
                    <button onClick={submitOrder} className="w-full bg-[#D4AF37] text-black py-3 rounded-full font-semibold">Подтвердить</button>
                    <button onClick={() => setShowCheckout(false)} className="w-full text-gray-500 text-sm">Назад</button>
                  </div>
                )}
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default FloatingCart;