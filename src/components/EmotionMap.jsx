import { useState } from 'react';
import { MapPin, X } from 'lucide-react';

const reviewsByCountry = [
  { 
    id: 1, 
    country: 'Paris', 
    lat: 48.8566, 
    lng: 2.3522, 
    review: '"Le Noir Absolu est une symphonie orientale. Je le porte chaque soir."', 
    name: 'Sophie L.', 
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=60',
    lang: '🇫🇷 Français'
  },
  { 
    id: 2, 
    country: 'Milan', 
    lat: 45.4642, 
    lng: 9.1900, 
    review: '"Rose de Minuit — un abbraccio di petali e mistero. Indimenticabile."', 
    name: 'Marco R.', 
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=60',
    lang: '🇮🇹 Italiano'
  },
  { 
    id: 3, 
    country: 'Dubai', 
    lat: 25.2048, 
    lng: 55.2708, 
    review: '"Oud Prestige captures the essence of Arabian nights. Pure luxury."', 
    name: 'Fatima A.', 
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=60',
    lang: '🇦🇪 العربية'
  },
  { 
    id: 4, 
    country: 'Tokyo', 
    lat: 35.6762, 
    lng: 139.6503, 
    review: '"Santal Royalは心を落ち着かせる完璧な香りです。毎日の贅沢。"', 
    name: 'Yuki T.', 
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=60',
    lang: '🇯🇵 日本語'
  },
  { 
    id: 5, 
    country: 'New York', 
    lat: 40.7128, 
    lng: -74.0060, 
    review: '"The Golden Serum is liquid gold. My skin has never looked better."', 
    name: 'Jessica M.', 
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60',
    lang: '🇺🇸 English'
  },
  { 
    id: 6, 
    country: 'Moscow', 
    lat: 55.7558, 
    lng: 37.6173, 
    review: '"Oud Prestige — это абсолютная роскошь. Аромат держится весь день."', 
    name: 'Екатерина В.', 
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=60',
    lang: '🇷🇺 Русский'
  },
  { 
    id: 7, 
    country: 'London', 
    lat: 51.5074, 
    lng: -0.1278, 
    review: '"Quite simply the most elegant fragrance I have ever worn. Perfection."', 
    name: 'William H.', 
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60',
    lang: '🇬🇧 English'
  },
  { 
    id: 8, 
    country: 'Berlin', 
    lat: 52.5200, 
    lng: 13.4050, 
    review: '"Die Textur des Golden Serums ist unglaublich. Meine Haut strahlt."', 
    name: 'Isabella S.', 
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=60',
    lang: '🇩🇪 Deutsch'
  },
  { 
    id: 9, 
    country: 'Madrid', 
    lat: 40.4168, 
    lng: -3.7038, 
    review: '"Rose de Minuit es una obra maestra. Me transporta a un jardín secreto."', 
    name: 'Carmen R.', 
    avatar: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=60',
    lang: '🇪🇸 Español'
  },
  { 
    id: 10, 
    country: 'Rome', 
    lat: 41.9028, 
    lng: 12.4964, 
    review: '"Un profumo che racconta l\'Italia. Elegante, intenso, indimenticabile."', 
    name: 'Luca B.', 
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=60',
    lang: '🇮🇹 Italiano'
  },
  { 
    id: 11, 
    country: 'Barcelona', 
    lat: 41.3851, 
    lng: 2.1734, 
    review: '"La suavidad del Silk Lipstick es incomparable. Me encanta."', 
    name: 'Elena M.', 
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=60',
    lang: '🇪🇸 Español'
  },
  { 
    id: 12, 
    country: 'Amsterdam', 
    lat: 52.3676, 
    lng: 4.9041, 
    review: '"De verpakking is al luxe. En de geur... verrukt me iedere ochtend."', 
    name: 'Fleur v.d.', 
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=60',
    lang: '🇳🇱 Nederlands'
  },
  { 
    id: 13, 
    country: 'Seoul', 
    lat: 37.5665, 
    lng: 126.9780, 
    review: '"골든 세럼은 정말 황금빛 피부를 만들어줍니다. 강력 추천!"', 
    name: 'Min-Ji K.', 
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=60',
    lang: '🇰🇷 한국어'
  },
  { 
    id: 14, 
    country: 'Istanbul', 
    lat: 41.0082, 
    lng: 28.9784, 
    review: '"Oud Prestige, doğunun büyüsünü taşıyan eşsiz bir koku."', 
    name: 'Ahmet D.', 
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=60',
    lang: '🇹🇷 Türkçe'
  },
  { 
    id: 15, 
    country: 'Rio', 
    lat: -22.9068, 
    lng: -43.1729, 
    review: '"A textura do Velvet Cream é como seda. Minha pele nunca esteve tão macia."', 
    name: 'Camila S.', 
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=60',
    lang: '🇧🇷 Português'
  },
  { 
    id: 16, 
    country: 'Cairo', 
    lat: 30.0444, 
    lng: 31.2357, 
    review: '"عطر يجسد الفخامة المصرية القديمة. رائع جداً"', 
    name: 'Omar H.', 
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=60',
    lang: '🇪🇬 العربية'
  },
  { 
    id: 17, 
    country: 'Mumbai', 
    lat: 19.0760, 
    lng: 72.8777, 
    review: '"गोल्डन सीरम ने मेरी त्वचा में जान डाल दी। शानदार!"', 
    name: 'Priya S.', 
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=60',
    lang: '🇮🇳 हिन्दी'
  },
  { 
    id: 18, 
    country: 'Sydney', 
    lat: -33.8688, 
    lng: 151.2093, 
    review: '"Absolutely divine! The longevity of Noir Absolu is incredible."', 
    name: 'James W.', 
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60',
    lang: '🇦🇺 English'
  }
];

const EmotionMap = () => {
  const [selectedReview, setSelectedReview] = useState(null);

  const getPosition = (lng, lat) => {
    const left = ((lng + 180) / 360) * 100;
    const top = ((90 - lat) / 180) * 100;
    return { left: Math.min(Math.max(left, 5), 95), top: Math.min(Math.max(top, 5), 95) };
  };

  return (
    <section id="emotionmap" className="py-24 bg-gradient-to-t from-black to-gray-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 reveal">
          <p className="text-[#D4AF37] text-sm tracking-widest mb-3">ГОЛОСА МИРА</p>
          <h2 className="font-serif text-4xl md:text-6xl text-white">Карта эмоций</h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">{reviewsByCountry.length} отзывов из {new Set(reviewsByCountry.map(r => r.country)).size} стран. Роскошь не знает границ.</p>
        </div>

        <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden border border-white/10 reveal">
          <div className="relative h-[500px] md:h-[600px] bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')] bg-cover bg-center opacity-25"></div>
          
          {reviewsByCountry.map((review) => {
            const pos = getPosition(review.lng, review.lat);
            return (
              <button
                key={review.id}
                className="absolute group"
                style={{ left: `${pos.left}%`, top: `${pos.top}%` }}
                onClick={() => setSelectedReview(review)}
              >
                <div className="relative">
                  <MapPin className="w-6 h-6 text-[#D4AF37] drop-shadow-lg animate-pulse" />
                  <div className="absolute -top-1 -left-1 w-8 h-8 rounded-full bg-[#D4AF37]/20 animate-ping"></div>
                </div>
                <span className="absolute top-8 left-1/2 -translate-x-1/2 text-xs text-white/70 whitespace-nowrap opacity-0 group-hover:opacity-100 transition bg-black/50 px-2 py-1 rounded-full">
                  {review.country}
                </span>
              </button>
            );
          })}
        </div>

        {selectedReview && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setSelectedReview(null)}>
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl max-w-md w-full p-6 border border-[#D4AF37]/30 shadow-2xl shadow-[#D4AF37]/10" onClick={(e) => e.stopPropagation()}>
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <img src={selectedReview.avatar} alt={selectedReview.name} className="w-12 h-12 rounded-full ring-2 ring-[#D4AF37]" />
                  <div>
                    <h3 className="text-white font-semibold">{selectedReview.name}</h3>
                    <p className="text-[#D4AF37] text-sm">{selectedReview.country}</p>
                    <p className="text-gray-500 text-xs">{selectedReview.lang}</p>
                  </div>
                </div>
                <button onClick={() => setSelectedReview(null)} className="text-gray-400 hover:text-white transition">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <p className="text-gray-300 text-lg italic leading-relaxed mb-4">"{selectedReview.review}"</p>
              <div className="flex items-center justify-between mt-4 pt-3 border-t border-white/10">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-[#D4AF37] text-sm">★</span>
                  ))}
                </div>
                <span className="text-gray-500 text-xs">5.0</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default EmotionMap;