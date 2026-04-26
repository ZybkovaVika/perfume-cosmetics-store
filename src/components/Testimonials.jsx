import { useState } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Екатерина С.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100',
    rating: 5,
    text: 'Лучшая парфюмерия, которую я когда-либо пробовала. Аромат держится весь день, флакон выглядит как произведение искусства.',
    date: 'Март 2025',
    location: 'Москва'
  },
  {
    id: 2,
    name: 'Александр М.',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100',
    rating: 5,
    text: 'Заказывал Oud Prestige — невероятное качество. Доставка быстрая, упаковка премиальная. Обязательно закажу ещё!',
    date: 'Апрель 2026',
    location: 'Санкт-Петербург'
  },
  {
    id: 3,
    name: 'Мария К.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100',
    rating: 5,
    text: 'Косметика превосходного качества. Крем с золотом делает кожу сияющей. Очень довольна покупкой!',
    date: 'Апрель 2024',
    location: 'Казань'
  },
  {
    id: 4,
    name: 'Дмитрий П.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100',
    rating: 5,
    text: 'Доставка в день заказа! Аромат Noir Absolu — это нечто невероятное. Спасибо за подарки.',
    date: 'Апрель 2025',
    location: 'Новосибирск'
  },
  {
    id: 5,
    name: 'Анна В.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100',
    rating: 5,
    text: 'Покупала сыворотку с золотом. Результат виден после первого применения. Кожа сияет!',
    date: 'Апрель 2026',
    location: 'Екатеринбург'
  },
  {
    id: 6,
    name: 'Ольга Т.',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100',
    rating: 5,
    text: 'Получила заказ за 2 дня! Аромат Rose de Minuit — нежность и роскошь.',
    date: 'Апрель 2026',
    location: 'Нижний Новгород'
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-black to-gray-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <div className="inline-block px-4 py-1 border border-[#D4AF37]/30 rounded-full mb-4">
            <span className="text-[#D4AF37] text-xs tracking-widest">ОТЗЫВЫ</span>
          </div>
          <h2 className="font-serif text-4xl md:text-6xl text-white mb-4">Голоса клиентов</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Более 3000 отзывов. Роскошь, которой доверяют.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {testimonials.map((review, idx) => (
            <div key={review.id} className="bg-[#111] border border-white/10 rounded-2xl p-6 hover:border-[#D4AF37] transition reveal-scale" style={{ transitionDelay: `${idx * 0.05}s` }}>
              <div className="text-4xl text-[#D4AF37]/30 mb-4">“</div>
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={`text-sm ${i < review.rating ? 'text-[#D4AF37]' : 'text-gray-600'}`}>★</span>
                ))}
              </div>
              <p className="text-gray-300 leading-relaxed mb-6 italic">"{review.text}"</p>
              <div className="flex items-center gap-3">
                <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h4 className="text-white font-medium">{review.name}</h4>
                  <p className="text-gray-500 text-sm">{review.location} · {review.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;