import { useState } from 'react';
import { ChevronLeft, ChevronRight, ShoppingBag, Heart, Star } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Noir Absolu',
    brand: 'LUXE',
    price: 28900,
    oldPrice: 34900,
    description: 'Древесно-пряный аромат с нотами черного перца, кожи и уда',
    image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=500',
    badge: 'Бестселлер',
    rating: 5,
    volume: '50 ml',
    notes: ['черный перец', 'кожа', 'уд', 'шафран']
  },
  {
    id: 2,
    name: 'Rose de Minuit',
    brand: 'LUXE',
    price: 23500,
    oldPrice: null,
    description: 'Цветочный аромат с нотами розы, жасмина и сандала',
    image: 'https://i.ebayimg.com/images/g/IBwAAOSwKDZnW3UH/s-l1600.jpg',
    badge: 'Новинка',
    rating: 5,
    volume: '50 ml',
    notes: ['роза', 'жасмин', 'сандал', 'амбра']
  },
  {
    id: 3,
    name: 'Oud Prestige',
    brand: 'LUXE',
    price: 32900,
    oldPrice: 42900,
    description: 'Восточный аромат с нотами уда, шафрана и амбры',
    image: 'https://avatars.mds.yandex.net/i?id=14dfe973af4113a32703b40b8a4a7e8d59a922de-8272935-images-thumbs&n=13',
    badge: 'Хит',
    rating: 5,
    volume: '100 ml',
    notes: ['уд', 'шафран', 'амбра', 'ладан']
  },
  {
    id: 4,
    name: 'Santal Royal',
    brand: 'LUXE',
    price: 31900,
    oldPrice: null,
    description: 'Древесный аромат с нотами сандала, кардамона и ванили',
    image: 'https://fimgs.net/mdimg/secundar/o.120259.jpg',
    badge: 'Эксклюзив',
    rating: 5,
    volume: '100 ml',
    notes: ['сандал', 'кардамон', 'ваниль', 'ладан']
  },
  {
    id: 5,
    name: 'Midnight Bloom',
    brand: 'LUXE',
    price: 18900,
    oldPrice: null,
    description: 'Ночной цветочный аромат с жасмином и ванилью',
    image: 'https://ir-3.ozone.ru/s3/multimedia-1-d/w1200/7240127377.jpg',
    badge: 'Лимитированная коллекция',
    rating: 5,
    volume: '50 ml',
    notes: ['жасмин', 'ваниль', 'мускус', 'ирис']
  },
  {
    id: 6,
    name: 'Golden Serum',
    brand: 'LUXE',
    price: 12500,
    oldPrice: 16900,
    description: 'Сыворотка с 24-каратным золотом для сияния кожи',
    image: 'https://img-edg.joomcdn.net/2178d0b1ae3468f80d278081d4d1ab151e7b188c_original.jpeg',
    badge: '-26%',
    rating: 5,
    volume: '30 ml',
    notes: ['золото', 'гиалуроновая кислота', 'витамин С']
  }
];

const ProductCarousel3D = ({ onAddToCart }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [likedProducts, setLikedProducts] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);

  const getVisibleProducts = () => {
    const prevIndex = (currentIndex - 1 + products.length) % products.length;
    const nextIndex = (currentIndex + 1) % products.length;
    return {
      prev: products[prevIndex],
      current: products[currentIndex],
      next: products[nextIndex]
    };
  };

  const { prev, current, next } = getVisibleProducts();

  const nextProduct = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  const prevProduct = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  const toggleLike = (productId, e) => {
    e.stopPropagation();
    let newWishlist;
    if (likedProducts.includes(productId)) {
      newWishlist = likedProducts.filter(id => id !== productId);
    } else {
      newWishlist = [...likedProducts, productId];
    }
    setLikedProducts(newWishlist);
    localStorage.setItem('luxeWishlist', JSON.stringify(newWishlist));
  };

  return (
    <section className="py-24 bg-gradient-to-b from-black to-gray-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 reveal">
          <div className="inline-block px-4 py-1 border border-[#D4AF37]/30 rounded-full mb-4">
            <span className="text-[#D4AF37] text-xs tracking-widest">КОЛЛЕКЦИЯ</span>
          </div>
          <h2 className="font-serif text-4xl md:text-6xl text-white mb-4">Избранные ароматы</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">6 эксклюзивных ароматов для истинных ценителей</p>
        </div>

        {/* 3D Карусель */}
        <div className="relative flex items-center justify-center min-h-[600px] md:min-h-[700px]">
          {/* Кнопка назад */}
          <button 
            onClick={prevProduct}
            className="absolute left-0 md:-left-12 z-20 w-12 h-12 rounded-full bg-black/50 border border-[#D4AF37]/30 flex items-center justify-center hover:bg-[#D4AF37] hover:text-black transition-all duration-300 group"
          >
            <ChevronLeft className="w-6 h-6 text-[#D4AF37] group-hover:text-black" />
          </button>

          {/* Левый (размытый) товар */}
          <div className="hidden md:block absolute left-[5%] lg:left-[10%] w-[220px] lg:w-[280px] opacity-40 blur-sm scale-90 transition-all duration-500 z-0">
            <div className="bg-[#111] border border-white/10 rounded-2xl overflow-hidden">
              <img src={prev.image} alt={prev.name} className="w-full aspect-square object-cover" />
              <div className="p-3">
                <h3 className="text-white text-sm font-medium">{prev.name}</h3>
                <p className="text-[#D4AF37] text-xs mt-1">{prev.price.toLocaleString()}₽</p>
              </div>
            </div>
          </div>

          {/* Центральный (четкий) товар — 3D эффект */}
          <div className="relative z-10 transform transition-all duration-500 scale-100 w-full max-w-md md:max-w-lg">
            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-[#D4AF37]/30 rounded-2xl overflow-hidden shadow-2xl shadow-[#D4AF37]/20 animate-scale">
              <div className="relative">
                <img src={current.image} alt={current.name} className="w-full aspect-square object-cover" />
                {current.badge && (
                  <span className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${
                    current.badge === 'Бестселлер' ? 'bg-[#D4AF37] text-black' :
                    current.badge === 'Новинка' ? 'bg-blue-600 text-white' :
                    current.badge === 'Хит' ? 'bg-red-600 text-white' :
                    current.badge.includes('-') ? 'bg-green-600 text-white' : 'bg-purple-600 text-white'
                  }`}>
                    {current.badge}
                  </span>
                )}
                <button 
                  onClick={(e) => toggleLike(current.id, e)}
                  className="absolute top-4 left-4 bg-black/50 backdrop-blur p-2 rounded-full hover:bg-[#D4AF37] transition"
                >
                  <Heart className={`w-5 h-5 ${likedProducts.includes(current.id) ? 'fill-[#D4AF37] text-[#D4AF37]' : 'text-white'}`} />
                </button>
              </div>
              
              <div className="p-6 md:p-8">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${i < current.rating ? 'text-[#D4AF37] fill-[#D4AF37]' : 'text-gray-600'}`} />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">{current.volume}</span>
                </div>
                
                <h3 className="font-serif text-2xl md:text-3xl text-white mb-1">{current.name}</h3>
                <p className="text-[#D4AF37] text-sm mb-3">{current.brand}</p>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-4">{current.description}</p>
                
                {/* Ноты */}
                <div className="mb-4">
                  <p className="text-xs text-gray-500 mb-2">НОТЫ</p>
                  <div className="flex flex-wrap gap-2">
                    {current.notes.map((note, i) => (
                      <button
                        key={i}
                        onClick={() => setSelectedNote(selectedNote === note ? null : note)}
                        className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs hover:border-[#D4AF37] hover:text-[#D4AF37] transition"
                      >
                        {note}
                      </button>
                    ))}
                  </div>
                  {selectedNote && (
                    <div className="mt-3 p-3 bg-white/5 rounded-lg animate-fade-in">
                      <p className="text-[#D4AF37] text-xs">✨ {selectedNote} — нота раскрывается через 10 минут после нанесения</p>
                    </div>
                  )}
                </div>
                
                <div className="flex items-center justify-between mt-4">
                  <div>
                    <span className="text-2xl md:text-3xl font-bold text-[#D4AF37]">{current.price.toLocaleString()}₽</span>
                    {current.oldPrice && <span className="text-sm text-gray-500 line-through ml-2">{current.oldPrice.toLocaleString()}₽</span>}
                  </div>
                  <button 
                    onClick={() => onAddToCart(current)} 
                    className="flex items-center gap-2 bg-[#D4AF37] text-black px-5 py-2 rounded-full font-semibold hover:bg-[#D4AF37]/80 transition group"
                  >
                    <ShoppingBag className="w-4 h-4" /> В корзину
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Правый (размытый) товар */}
          <div className="hidden md:block absolute right-[5%] lg:right-[10%] w-[220px] lg:w-[280px] opacity-40 blur-sm scale-90 transition-all duration-500 z-0">
            <div className="bg-[#111] border border-white/10 rounded-2xl overflow-hidden">
              <img src={next.image} alt={next.name} className="w-full aspect-square object-cover" />
              <div className="p-3">
                <h3 className="text-white text-sm font-medium">{next.name}</h3>
                <p className="text-[#D4AF37] text-xs mt-1">{next.price.toLocaleString()}₽</p>
              </div>
            </div>
          </div>

          {/* Кнопка вперёд */}
          <button 
            onClick={nextProduct}
            className="absolute right-0 md:-right-12 z-20 w-12 h-12 rounded-full bg-black/50 border border-[#D4AF37]/30 flex items-center justify-center hover:bg-[#D4AF37] hover:text-black transition-all duration-300 group"
          >
            <ChevronRight className="w-6 h-6 text-[#D4AF37] group-hover:text-black" />
          </button>
        </div>

        {/* Индикаторы */}
        <div className="flex justify-center gap-2 mt-8">
          {products.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-1 rounded-full transition-all duration-300 ${
                currentIndex === idx ? 'w-8 bg-[#D4AF37]' : 'w-4 bg-gray-600 hover:bg-[#D4AF37]/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel3D;