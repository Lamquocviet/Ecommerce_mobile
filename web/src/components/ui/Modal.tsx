import type { ReactNode } from 'react';

type ModalProps = {
  open: boolean;
  title: string;
  children: ReactNode;
  onClose: () => void;
};

export const Modal = ({ open, title, children, onClose }: ModalProps) => {
  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
      <div className="w-full max-w-2xl rounded-4xl border border-white/10 bg-card p-8 shadow-glow">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-white">{title}</h2>
          <button className="text-white/70 transition hover:text-white" onClick={onClose}>
            Close
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};
