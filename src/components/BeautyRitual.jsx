import { useState } from 'react';

const rituals = [
  { 
    step: 1, 
    title: 'Демакияж', 
    desc: 'Первый и самый важный шаг — удаление макияжа и загрязнений. Используйте мицеллярную воду или гидрофильное масло для мягкого очищения. Нанесите средство на сухую кожу, помассируйте, затем смойте тёплой водой.',
    icon: '💧',
    duration: '2 минуты',
    image: 'https://avatars.mds.yandex.net/i?id=003705458cd69a61fa6d9daae61bab14_l-12484740-images-thumbs&n=13'
  },
  { 
    step: 2, 
    title: 'Очищение', 
    desc: 'Глубокое очищение пор с помощью пенки или геля. Удаляет остатки макияжа, себум и загрязнения. Вспеньте средство в руках, нанесите круговыми движениями, смойте прохладной водой. Кожа становится чистой и свежей.',
    icon: '🧼',
    duration: '4 минута',
    image: 'https://avatars.mds.yandex.net/i?id=ae7bb39201925ea9bceb767b1f3f9054e6b8507d-5485324-images-thumbs&n=13'
  },
  { 
    step: 3, 
    title: 'Тонизация', 
    desc: 'Восстановление pH-баланса и подготовка к нанесению активных средств. Тоник успокаивает, сужает поры и повышает эффективность последующего ухода. Нанесите на ватный диск и протрите лицо по массажным линиям.',
    icon: '🌹',
    duration: '2 минута',
    image: 'https://www.passion.ru/thumb/1280x720/smart/filters:quality(75)/imgs/2022/01/25/18/5193629/4fa9e96fd4b197c4e3758ff0cdcb63a1168122fc.jpg'
  },
  { 
    step: 4, 
    title: 'Увлажнение и питание', 
    desc: 'Нанесение сыворотки и крема для глубокого увлажнения. Сыворотка с гиалуроновой кислотой проникает в глубокие слои кожи, а крем с маслами и витаминами запечатывает влагу. Наносите снизу вверх, не растягивая кожу.',
    icon: '✨',
    duration: '3 минуты',
    image: 'https://konfik.ru/wa-data/public/photos/72/14/1472/1472.970.jpg'
  },
  { 
    step: 5, 
    title: 'Защита', 
    desc: 'Дневная защита от UV-лучей и загрязнений с помощью SPF. Наносите за 20 минут до выхода на улицу. Для ночного ухода — восстанавливающий крем с ретинолом или пептидами для регенерации кожи во время сна.',
    icon: '☀️',
    duration: '5 минуты',
    image: 'https://wibes-05.wbbasket.ru/2ff8b68f-444e-11f0-932b-e25718bc47c8/630562-wbkids_articles_editor-3.jpg'
  }
];

const BeautyRitual = () => {
  const [activeStep, setActiveStep] = useState(1);

  const currentRitual = rituals.find(r => r.step === activeStep);

  return (
    <section id="ritual" className="py-24 bg-gradient-to-b from-black to-gray-950 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-[#D4AF37]/5 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-[#D4AF37]/5 blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 reveal">
          <div className="inline-block px-4 py-1 border border-[#D4AF37]/30 rounded-full mb-4">
            <span className="text-[#D4AF37] text-xs tracking-widest">РИТУАЛ КРАСОТЫ</span>
          </div>
          <h2 className="font-serif text-4xl md:text-6xl text-white">Путь к сиянию</h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">5 шагов к идеальной коже. Ежедневный ритуал красоты от LUXE BEAUTY.</p>
        </div>
        
        {/* Навигация по этапам */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 reveal">
          {rituals.map((r) => (
            <button 
              key={r.step}
              onClick={() => setActiveStep(r.step)}
              className={`px-5 py-2 rounded-full transition-all duration-500 ${
                activeStep === r.step 
                  ? 'bg-[#D4AF37] text-black font-medium' 
                  : 'bg-white/5 text-gray-400 hover:bg-white/10'
              }`}
            >
              {r.step}. {r.title}
            </button>
          ))}
        </div>
        
        {/* Активный этап */}
        <div className="transition-all duration-700">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="reveal-left">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-[#D4AF37]/10">
                <img src={currentRitual.image} alt={currentRitual.title} className="w-full h-auto hover:scale-105 transition duration-700" />
                <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur px-3 py-1 rounded-full text-xs text-[#D4AF37]">
                  ⏱️ {currentRitual.duration}
                </div>
              </div>
            </div>
            
            <div className="reveal-right">
              <div className="text-6xl mb-4">{currentRitual.icon}</div>
              <h3 className="font-serif text-3xl md:text-4xl text-white mb-3">
                Шаг {currentRitual.step}. {currentRitual.title}
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                {currentRitual.desc}
              </p>
              <div className="flex items-center gap-2 text-sm text-[#D4AF37]">
                <span className="w-8 h-px bg-[#D4AF37]"></span>
                <span>Рекомендованное время: {currentRitual.duration}</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Индикатор прогресса */}
        <div className="mt-12 flex justify-center gap-2">
          {rituals.map((r) => (
            <button
              key={r.step}
              onClick={() => setActiveStep(r.step)}
              className={`h-1 rounded-full transition-all duration-300 ${
                activeStep === r.step ? 'w-8 bg-[#D4AF37]' : 'w-4 bg-gray-600 hover:bg-[#D4AF37]/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeautyRitual;