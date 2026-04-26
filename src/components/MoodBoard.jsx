import { useState } from 'react';
import { Play, Pause } from 'lucide-react';

const videos = [
  { id: 1, src: '/videos/tysh1.mp4', title: 'Тушь', mood: 'Объёмный' },
  { id: 2, src: '/videos/shampyn.mp4', title: 'Шампунь', mood: 'Увлажняющий' },
  { id: 3, src: '/videos/sivorotka.mp4', title: 'Сыворотка', mood: 'Сияющий' },
];

const MoodBoard = () => {
  const [hovered, setHovered] = useState(null);
  const [playing, setPlaying] = useState({});

  const togglePlay = (id) => {
    const video = document.getElementById(`video-${id}`);
    if (video.paused) {
      video.play();
      setPlaying({ ...playing, [id]: true });
    } else {
      video.pause();
      setPlaying({ ...playing, [id]: false });
    }
  };

  return (
    <section id="moodboard" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <p className="text-[#D4AF37] text-sm tracking-widest mb-3">ATMOSPHÈRE</p>
          <h2 className="font-serif text-4xl md:text-6xl text-white">Как звучит роскошь?</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {videos.map((video, idx) => (
            <div 
              key={video.id}
              className="relative group rounded-2xl overflow-hidden cursor-pointer reveal"
              style={{ transitionDelay: `${idx * 0.1}s` }}
              onMouseEnter={() => setHovered(video.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <video 
                id={`video-${video.id}`}
                src={video.src}
                className="w-full aspect-video object-cover group-hover:scale-110 transition duration-700"
                loop
                muted
                playsInline
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition"></div>
              <button 
                onClick={() => togglePlay(video.id)}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white/20 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition"
              >
                {playing[video.id] ? <Pause className="w-6 h-6 text-white" /> : <Play className="w-6 h-6 text-white" />}
              </button>
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-white font-semibold text-lg">{video.title}</h3>
                <p className="text-[#D4AF37] text-sm">{video.mood}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MoodBoard;