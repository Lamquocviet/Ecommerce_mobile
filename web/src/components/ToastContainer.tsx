import { AlertCircle, CheckCircle, Info, X, AlertTriangle } from 'lucide-react';
import { useToast } from '@/contexts/ToastContext';

export const ToastContainer = () => {
  const { toasts, removeToast } = useToast();

  const getIcon = (type: string) => {
    switch (type) {
      case 'success':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'error':
        return <AlertCircle className="h-5 w-5 text-red-500" />;
      case 'warning':
        return <AlertTriangle className="h-5 w-5 text-yellow-500" />;
      case 'info':
      default:
        return <Info className="h-5 w-5 text-blue-500" />;
    }
  };

  const getBackgroundColor = (type: string) => {
    switch (type) {
      case 'success':
        return 'bg-green-950/80 border-green-500/50';
      case 'error':
        return 'bg-red-950/80 border-red-500/50';
      case 'warning':
        return 'bg-yellow-950/80 border-yellow-500/50';
      case 'info':
      default:
        return 'bg-blue-950/80 border-blue-500/50';
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 space-y-2 max-w-sm">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`flex items-center gap-3 rounded-2xl border px-4 py-3 text-sm text-white backdrop-blur-xl animate-in slide-in-from-right-5 ${getBackgroundColor(toast.type)}`}
        >
          {getIcon(toast.type)}
          <span className="flex-1">{toast.message}</span>
          <button
            onClick={() => removeToast(toast.id)}
            className="text-white/50 hover:text-white transition"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      ))}
    </div>
  );
};
