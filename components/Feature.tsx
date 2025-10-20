import React from 'react';

interface FeatureProps {
  title: string;
  subtitle: string;
  link?: string;
}

export function Feature({ title, subtitle, link }: FeatureProps) {
  const content = (
    <div className="p-8 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:border-purple-500 hover:shadow-xl hover:-translate-y-1 h-full">
      <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-gray-50">{title}</h3>
      <p className="text-[0.95rem] leading-relaxed text-gray-600 dark:text-gray-300 m-0">{subtitle}</p>
    </div>
  );

  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" className="no-underline text-inherit block h-full">
        {content}
      </a>
    );
  }

  return content;
}

export function FeatureGrid({ children }: { children: React.ReactNode }) {
  return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-12">{children}</div>;
}
