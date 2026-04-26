import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Бренд */}
          <div className="reveal">
            <p className="text-2xl font-serif text-white mb-4">LUXE<span className="text-[#D4AF37]">BEAUTY</span></p>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">Цифровой парфюмерный бутик. Роскошь, доступная каждому.</p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#D4AF37] transition group">
                <span className="text-gray-400 group-hover:text-black">📷</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#D4AF37] transition group">
                <span className="text-gray-400 group-hover:text-black">🐦</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#D4AF37] transition group">
                <span className="text-gray-400 group-hover:text-black">📘</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#D4AF37] transition group">
                <span className="text-gray-400 group-hover:text-black">📧</span>
              </a>
            </div>
          </div>
          
          {/* Каталог */}
          <div className="reveal reveal-delay-100">
            <h4 className="text-white font-medium mb-4">Каталог</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#fragrances" className="text-gray-500 hover:text-[#D4AF37] transition">Парфюмерия</a></li>
              <li><a href="#ritual" className="text-gray-500 hover:text-[#D4AF37] transition">Косметика</a></li>
              <li><a href="#moodboard" className="text-gray-500 hover:text-[#D4AF37] transition">Коллекции</a></li>
            </ul>
          </div>
          
          {/* Помощь */}
          <div className="reveal reveal-delay-200">
            <h4 className="text-white font-medium mb-4">Помощь</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-500 hover:text-[#D4AF37] transition">Доставка</a></li>
              <li><a href="#" className="text-gray-500 hover:text-[#D4AF37] transition">Оплата</a></li>
              <li><a href="#" className="text-gray-500 hover:text-[#D4AF37] transition">Возврат</a></li>
              <li><a href="#" className="text-gray-500 hover:text-[#D4AF37] transition">Контакты</a></li>
            </ul>
          </div>
          
          {/* Подписка */}
          <div className="reveal reveal-delay-300">
            <h4 className="text-white font-medium mb-4">Новости</h4>
            <p className="text-gray-500 text-sm mb-4">Подпишитесь на новости о новых коллекциях</p>
            <div className="flex">
              <input type="email" placeholder="Ваш email" className="flex-1 bg-white/5 border border-white/10 rounded-l-xl px-4 py-3 text-sm focus:outline-none focus:border-[#D4AF37]" />
              <button className="bg-[#D4AF37] px-6 py-3 rounded-r-xl text-black font-medium hover:bg-[#D4AF37]/80 transition">→</button>
            </div>
          </div>
        </div>
        
        {/* Нижняя часть */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center text-xs text-gray-600">
          <p>© 2026 Luxe Beauty. Все права защищены.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#D4AF37] transition">Политика конфиденциальности</a>
            <a href="#" className="hover:text-[#D4AF37] transition">Пользовательское соглашение</a>
          </div>
          <p>Сделано с ❤️ для ценителей роскоши</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;