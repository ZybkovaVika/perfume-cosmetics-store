import { useEffect, useRef } from 'react';

const Hero3D = () => {
  const textRef = useRef(null);

  useEffect(() => {
    if (textRef.current) {
      textRef.current.style.animation = 'none';
      textRef.current.offsetHeight;
      textRef.current.style.animation = 'typewriter 1.5s steps(30, end), cursor 0.75s step-end infinite';
    }
  }, []);

  return (
    <section className="relative h-screen overflow-hidden bg-black">
      {/* Фоновое видео */}
      <div className="absolute inset-0">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-60">
          <source src="https://assets.mixkit.co/videos/preview/mixkit-perfume-bottle-on-a-dark-surface-32959-large.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Летающие бриллианты 💎 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(40)].map((_, i) => {
          const size = 20 + Math.random() * 35;
          const duration = 8 + Math.random() * 12;
          const delay = Math.random() * 15;
          const left = Math.random() * 100;
          const top = Math.random() * 100;
          
          return (
            <div
              key={i}
              className="absolute animate-float-diamond"
              style={{
                left: `${left}%`,
                top: `${top}%`,
                animationDelay: `${delay}s`,
                animationDuration: `${duration}s`,
              }}
            >
              {/* Свечение под бриллиантом */}
              <div 
                className="absolute rounded-full bg-[#D4AF37]/20 blur-md"
                style={{
                  width: `${size + 10}px`,
                  height: `${size + 10}px`,
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
              />
              {/* Эмодзи бриллианта */}
              <div
                style={{
                  fontSize: `${size}px`,
                  lineHeight: 1,
                  filter: 'drop-shadow(0 0 8px rgba(212, 175, 55, 0.4))',
                }}
              >
                💎
              </div>
            </div>
          );
        })}
      </div>

      {/* Вторая волна — маленькие бриллианты */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(25)].map((_, i) => {
          const size = 12 + Math.random() * 18;
          const duration = 12 + Math.random() * 15;
          const delay = Math.random() * 20;
          const left = Math.random() * 100;
          
          return (
            <div
              key={`small-${i}`}
              className="absolute animate-float-diamond-slow"
              style={{
                left: `${left}%`,
                top: `-${Math.random() * 100}%`,
                animationDelay: `${delay}s`,
                animationDuration: `${duration}s`,
              }}
            >
              <div
                style={{
                  fontSize: `${size}px`,
                  lineHeight: 1,
                  filter: 'drop-shadow(0 0 5px rgba(212, 175, 55, 0.3))',
                  opacity: 0.6,
                }}
              >
                💎
              </div>
            </div>
          );
        })}
      </div>

      {/* Затемнение */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/80 z-10"></div>

      {/* Контент Hero */}
      <div className="relative z-20 h-full flex items-center justify-center px-6">
        <div className="text-center max-w-4xl">
          <h1 ref={textRef} className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-tight mb-6 overflow-hidden whitespace-nowrap border-r-4 border-[#D4AF37] inline-block">
            L'Art du Parfum
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 opacity-0 animate-fade-in" style={{ animationDelay: '1.6s', animationFillMode: 'forwards' }}>
            Искусство, заключённое в каждом флаконе. Путешествие в мир роскоши.
          </p>
          <a href="#ritual" className="inline-flex items-center gap-2 text-white border-b border-[#D4AF37] pb-1 hover:text-[#D4AF37] transition opacity-0 animate-fade-in" style={{ animationDelay: '2s', animationFillMode: 'forwards' }}>
            Начать путешествие <span className="text-[#D4AF37]">→</span>
          </a>
        </div>
      </div>

      {/* Скролл-индикатор */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      {/* Стили для анимаций */}
      <style>{`
        @keyframes typewriter {
          from { width: 0; }
          to { width: 100%; }
        }
        
        @keyframes cursor {
          from, to { border-color: transparent; }
          50% { border-color: #D4AF37; }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes floatDiamond {
          0% {
            transform: translateY(0px) rotate(0deg);
            opacity: 1;
          }
          50% {
            transform: translateY(-40px) rotate(10deg);
            opacity: 0.8;
          }
          100% {
            transform: translateY(-80px) rotate(20deg);
            opacity: 0;
          }
        }
        
        @keyframes floatDiamondSlow {
          0% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.8;
          }
          50% {
            transform: translateY(-30px) rotate(5deg);
            opacity: 0.5;
          }
          100% {
            transform: translateY(-60px) rotate(10deg);
            opacity: 0;
          }
        }
        
        @keyframes bounce {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(5px); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        
        .animate-fade-in {
          animation: fadeIn 1s ease forwards;
        }
        
        .animate-float-diamond {
          animation: floatDiamond 10s ease-in-out infinite;
        }
        
        .animate-float-diamond-slow {
          animation: floatDiamondSlow 15s ease-in-out infinite;
        }
        
        .animate-bounce {
          animation: bounce 1.5s ease-in-out infinite;
        }
        
        .animate-pulse {
          animation: pulse 1.5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero3D;