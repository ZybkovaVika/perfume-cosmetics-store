import { useState } from 'react';
import { fragrances } from '../data/fragrances';

const FragranceStories = () => {
  const [activeNote, setActiveNote] = useState(null);

  return (
    <section id="fragrances" className="relative bg-black">
      {fragrances.map((fragrance, idx) => (
        <div 
          key={fragrance.id} 
          className={`min-h-screen flex items-center py-20 ${idx % 2 === 0 ? 'bg-gradient-to-r from-black to-gray-900' : 'bg-gradient-to-l from-black to-gray-900'}`}
        >
          <div className="max-w-7xl mx-auto px-6 py-20 w-full">
            <div className={`grid md:grid-cols-2 gap-12 items-center ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              {/* Левая колонка - изображение */}
              <div className={`reveal ${idx % 2 === 0 ? 'reveal-left' : 'reveal-right'}`}>
                <div className="relative group">
                  <img src={fragrance.image} alt={fragrance.name} className="w-full h-auto rounded-2xl shadow-2xl shadow-[#D4AF37]/10 group-hover:scale-105 transition duration-700" />
                </div>
              </div>
              
              {/* Правая колонка - контент */}
              <div className={`reveal ${idx % 2 === 0 ? 'reveal-right' : 'reveal-left'}`}>
                <div className="inline-block mb-4 px-3 py-1 border border-[#D4AF37]/30 rounded-full text-[#D4AF37] text-xs tracking-wider">
                  {fragrance.brand}
                </div>
                <h2 className="font-serif text-4xl md:text-6xl text-white mb-4">{fragrance.name}</h2>
                <p className="text-gray-400 text-lg mb-6 leading-relaxed">{fragrance.description}</p>
                
                {/* Аккордеон нот */}
                <div className="mb-6">
                  <p className="text-sm text-gray-500 mb-3">НОТЫ</p>
                  <div className="flex flex-wrap gap-2">
                    {fragrance.notes.map((note, i) => (
                      <button 
                        key={i}
                        onClick={() => setActiveNote(activeNote === note ? null : note)}
                        className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm hover:border-[#D4AF37] hover:text-[#D4AF37] transition"
                      >
                        {note}
                      </button>
                    ))}
                  </div>
                  {activeNote && (
                    <div className="mt-4 p-4 bg-white/5 rounded-xl animate-fade-in">
                      <p className="text-[#D4AF37] text-sm">✨ {activeNote} — нота раскрывается через 10 минут после нанесения</p>
                    </div>
                  )}
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="text-3xl font-bold text-[#D4AF37]">{fragrance.price.toLocaleString()}₽</div>
                  <button className="group flex items-center gap-2 text-white border-b border-[#D4AF37] pb-1 hover:text-[#D4AF37] transition">
                    Чувствовать аромат <span className="group-hover:translate-x-1 transition">→</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default FragranceStories;