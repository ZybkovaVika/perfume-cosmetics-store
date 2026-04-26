import { useEffect } from 'react';
import { CheckCircle, X } from 'lucide-react';

const Notification = ({ message, visible, onClose, type = 'success' }) => {
  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [visible, onClose]);

  if (!visible) return null;

  const bgColor = type === 'success' ? 'bg-gradient-to-r from-green-600 to-green-700' : 'bg-gradient-to-r from-red-600 to-red-700';
  const icon = type === 'success' ? <CheckCircle className="w-5 h-5" /> : <X className="w-5 h-5" />;

  return (
    <div className="fixed bottom-24 right-6 z-[100] animate-slide-in-right">
      <div className={`${bgColor} text-white px-5 py-3 rounded-xl shadow-2xl flex items-center gap-3 border border-white/20`}>
        {icon}
        <span className="text-sm font-medium">{message}</span>
      </div>
    </div>
  );
};

export default Notification;