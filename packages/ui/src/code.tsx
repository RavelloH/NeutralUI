import { type JSX } from 'react';

export function Code({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}): JSX.Element {
  const baseClasses =
    'inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-sm font-mono text-gray-800 border border-gray-200';
  const combinedClasses = `${baseClasses} ${className}`;
  return <code className={combinedClasses}>{children}</code>;
}
