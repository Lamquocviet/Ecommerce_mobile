import type { ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'ghost';
};

export const Button = ({ variant = 'primary', className, ...props }: ButtonProps) => {
  return (
    <button
      className={clsx(
        'inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold transition-all duration-200',
        {
          'bg-accent text-black hover:brightness-110': variant === 'primary',
          'border border-white/10 bg-card text-white hover:bg-white/5': variant === 'secondary',
          'bg-transparent text-white hover:bg-white/5': variant === 'ghost'
        },
        className
      )}
      {...props}
    />
  );
};
