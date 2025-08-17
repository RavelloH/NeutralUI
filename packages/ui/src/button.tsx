'use client';

import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  className?: string;
  appName: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = ({
  children,
  className = '',
  appName,
  variant = 'primary',
  size = 'md',
}: ButtonProps) => {
  const baseClasses =
    'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';

  const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300',
    outline: 'border border-gray-300 bg-transparent hover:bg-gray-100',
  };

  const sizeClasses = {
    sm: 'h-8 px-3 text-sm',
    md: 'h-10 px-4 py-2',
    lg: 'h-12 px-6 text-lg',
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  return (
    <button className={combinedClasses} onClick={() => alert(`Hello from your ${appName} app!`)}>
      {children}
    </button>
  );
};
