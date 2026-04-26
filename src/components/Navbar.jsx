import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Коллекции', href: '#carousel' },
    { name: 'Ритуал', href: '#ritual' },
    { name: 'Атмосфера', href: '#moodboard' },
    { name: 'Карта эмоций', href: '#emotionmap' },
    { name: 'Отзывы', href: '#testimonials' }
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 px-6 py-5 transition-all duration-500 ${scrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Логотип */}
          <a href="#" className="text-2xl font-serif tracking-widest text-white">
            LUXE<span className="text-[#D4AF37]">BEAUTY</span>
          </a>

          {/* Десктопная навигация */}
          <div className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm uppercase tracking-widest text-white/70 hover:text-[#D4AF37] transition border-b border-transparent hover:border-[#D4AF37] pb-1"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Кнопка "Начать путешествие" */}
          <a
            href="#ritual"
            className="hidden md:block text-sm uppercase tracking-widest text-white/70 hover:text-[#D4AF37] transition border-b border-transparent hover:border-[#D4AF37] pb-1"
          >
            Начать путешествие
          </a>

          {/* Мобильное меню (бургер) */}
          <button
            className="md:hidden text-white focus:outline-none z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Мобильное выезжающее меню */}
      <div className={`fixed top-0 right-0 h-full w-64 bg-black/95 backdrop-blur-md z-40 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
        <div className="flex flex-col pt-24 px-6 gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white/70 hover:text-[#D4AF37] transition text-sm uppercase tracking-widest"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#ritual"
            className="text-[#D4AF37] text-sm uppercase tracking-widest border-t border-white/10 pt-4 mt-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Начать путешествие →
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;