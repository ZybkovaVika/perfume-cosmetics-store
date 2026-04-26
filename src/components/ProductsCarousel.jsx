import { useState } from 'react';
import { ChevronLeft, ChevronRight, ShoppingBag, Heart } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Noir Absolu',
    brand: 'LUXE',
    price: 28900,
    oldPrice: 34900,
    description: 'Древесно-пряный аромат с нотами черного перца, кожи и уда',
    image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=400',
    badge: 'Бестселлер',
    rating: 5,
    volume: '50 ml'
  },
  {
    id: 2,
    name: 'Rose de Minuit',
    brand: 'LUXE',
    price: 23500,
    oldPrice: null,
    description: 'Цветочный аромат с нотами розы, жасмина и сандала',
    image: 'https://images.unsplash.com/photo-1610824352934-c10d87b700ec?w=400',
    badge: 'Новинка',
    rating: 5,
    volume: '50 ml'
  },
  {
    id: 3,
    name: 'Oud Prestige',
    brand: 'LUXE',
    price: 32900,
    oldPrice: 42900,
    description: 'Восточный аромат с нотами уда, шафрана и амбры',
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=400',
    badge: 'Хит',
    rating: 5,
    volume: '100 ml'
  },
  {
    id: 4,
    name: 'Santal Royal',
    brand: 'LUXE',
    price: 31900,
    oldPrice: null,
    description: 'Древесный аромат с нотами сандала, кардамона и ванили',
    image: 'https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?w=400',
    badge: 'Эксклюзив',
    rating: 5,
    volume: '100 ml'
  },
  {
    id: 5,
    name: 'Golden Serum',
    brand: 'LUXE',
    price: 12500,
    oldPrice: 16900,
    description: 'Сыворотка с 24-каратным золотом для сияния кожи',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400',
    badge: '-26%',
    rating: 5,
    volume: '30 ml'
  },
  {
    id: 6,
    name: 'Velvet Cream',
    brand: 'LUXE',
    price: 8900,
    oldPrice: 12900,
    description: 'Увлажняющий крем с золотыми частицами',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a0b?w=400',
    badge: '-31%',
    rating: 4,
    volume: '50 ml'
  },
  {
    id: 7,
    name: 'Silk Lipstick',
    brand: 'LUXE',
    price: 3200,
    oldPrice: 4500,
    description: 'Матовая помада с эффектом шелка, стойкость 12 часов',
    image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400',
    badge: '-29%',
    rating: 4,
    volume: '3.5 g'
  },
  {
    id: 8,
    name: 'Midnight Bloom',
    brand: 'LUXE',
    price: 18900,
    oldPrice: null,
    description: 'Ночной цветочный аромат с жасмином и ванилью',
    image: 'https://images.unsplash.com/photo-1594035910389-fb87a6d2ff7e?w=400',
    badge: 'Лимитированная коллекция',
    rating: 5,
    volume: '50 ml'
  }
];

const ProductsCarousel = ({ onAddToCart }) => {
  const [startIndex, setStartIndex] = useState(0);
  const [likedProducts, setLikedProducts] = useState([]);
  const itemsPerPage = 4;

  const nextSlide = () => {
    if (startIndex + itemsPerPage < products.length) {
      setStartIndex(startIndex + itemsPerPage);
    }
  };

  const prevSlide = () => {
    if (startIndex - itemsPerPage >= 0) {
      setStartIndex(startIndex - itemsPerPage);
    }
  };

  const visibleProducts = products.slice(startIndex, startIndex + itemsPerPage);

  const toggleLike = (productId) => {
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
    <section className="py-24 bg-gradient-to-b from-black to-gray-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 reveal">
          <div className="inline-block px-4 py-1 border border-[#D4AF37]/30 rounded-full mb-4">
            <span className="text-[#D4AF37] text-xs tracking-widest">КОЛЛЕКЦИЯ</span>
          </div>
          <h2 className="font-serif text-4xl md:text-6xl text-white mb-4">Избранные ароматы</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">8 эксклюзивных ароматов для истинных ценителей</p>
        </div>

        {/* Карусель */}
        <div className="relative">
          {/* Кнопка назад */}
          {startIndex > 0 && (
            <button 
              onClick={prevSlide}
              className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-black/50 border border-[#D4AF37]/30 flex items-center justify-center hover:bg-[#D4AF37] hover:text-black transition group"
            >
              <ChevronLeft className="w-6 h-6 text-[#D4AF37] group-hover:text-black" />
            </button>
          )}

          {/* Кнопка вперёд */}
          {startIndex + itemsPerPage < products.length && (
            <button 
              onClick={nextSlide}
              className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-black/50 border border-[#D4AF37]/30 flex items-center justify-center hover:bg-[#D4AF37] hover:text-black transition group"
            >
              <ChevronRight className="w-6 h-6 text-[#D4AF37] group-hover:text-black" />
            </button>
          )}

          {/* Сетка товаров */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {visibleProducts.map((product, idx) => (
              <div key={product.id} className="bg-[#111] border border-white/10 rounded-2xl overflow-hidden hover:border-[#D4AF37] transition-all duration-500 hover:-translate-y-2 reveal-scale" style={{ transitionDelay: `${idx * 0.05}s` }}>
                <div className="relative overflow-hidden">
                  <img src={product.image} alt={product.name} className="w-full aspect-square object-cover hover:scale-110 transition duration-700" />
                  {product.badge && (
                    <span className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold ${
                      product.badge === 'Бестселлер' ? 'bg-[#D4AF37] text-black' :
                      product.badge === 'Новинка' ? 'bg-blue-600 text-white' :
                      product.badge === 'Хит' ? 'bg-red-600 text-white' :
                      product.badge.includes('-') ? 'bg-green-600 text-white' : 'bg-purple-600 text-white'
                    }`}>
                      {product.badge}
                    </span>
                  )}
                  <button 
                    onClick={() => toggleLike(product.id)}
                    className="absolute top-3 left-3 bg-black/50 backdrop-blur p-2 rounded-full hover:bg-[#D4AF37] transition"
                  >
                    <Heart className={`w-4 h-4 ${likedProducts.includes(product.id) ? 'fill-[#D4AF37] text-[#D4AF37]' : 'text-white'}`} />
                  </button>
                </div>
                
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className={`text-xs ${i < product.rating ? 'text-[#D4AF37]' : 'text-gray-600'}`}>★</span>
                      ))}
                    </div>
                    <span className="text-xs text-gray-500">{product.volume}</span>
                  </div>
                  <h3 className="font-medium text-white hover:text-[#D4AF37] transition">{product.name}</h3>
                  <p className="text-xs text-gray-500 mt-1">{product.brand}</p>
                  <div className="flex items-center gap-2 mt-3">
                    <span className="text-xl font-bold text-[#D4AF37]">{product.price.toLocaleString()}₽</span>
                    {product.oldPrice && <span className="text-sm text-gray-500 line-through">{product.oldPrice.toLocaleString()}₽</span>}
                  </div>
                  <button 
                    onClick={() => onAddToCart(product)} 
                    className="mt-4 w-full bg-transparent border border-[#D4AF37]/50 text-[#D4AF37] py-2 rounded-full text-sm font-semibold hover:bg-[#D4AF37] hover:text-black transition-all duration-300 group"
                  >
                    <span className="flex items-center justify-center gap-2">
                      В корзину <ShoppingBag className="w-3 h-3 group-hover:translate-x-1 transition" />
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Индикаторы слайдов */}
        <div className="flex justify-center gap-2 mt-8">
          {[...Array(Math.ceil(products.length / itemsPerPage))].map((_, idx) => (
            <button
              key={idx}
              onClick={() => setStartIndex(idx * itemsPerPage)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                Math.floor(startIndex / itemsPerPage) === idx ? 'w-8 bg-[#D4AF37]' : 'bg-gray-600 hover:bg-[#D4AF37]/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsCarousel;