import { type JSX } from 'react';

export function Card({
  className = '',
  title,
  children,
  href,
}: {
  className?: string;
  title: string;
  children: React.ReactNode;
  href: string;
}): JSX.Element {
  const baseClasses =
    'group rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-gray-300';
  const combinedClasses = `${baseClasses} ${className}`;

  return (
    <a
      className={combinedClasses}
      href={`${href}?utm_source=create-turbo&utm_medium=basic&utm_campaign=create-turbo"`}
      rel='noopener noreferrer'
      target='_blank'
    >
      <h2 className='text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors'>
        {title}{' '}
        <span className='inline-block transition-transform group-hover:translate-x-1'>→</span>
      </h2>
      <p className='mt-2 text-gray-600 text-sm leading-relaxed'>{children}</p>
    </a>
  );
}
