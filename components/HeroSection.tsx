import React from 'react';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
}

export function HeroSection({ title, subtitle, ctaText, ctaLink }: HeroSectionProps) {
  return (
    <div className="text-center py-16 px-8 max-w-4xl mx-auto mb-16">
      <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 bg-gradient-to-r from-[#51a684] to-[#115748] bg-clip-text text-transparent">
        {title}
      </h1>
      <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
        {subtitle}
      </p>
      {ctaText && ctaLink && (
        <a
          href={ctaLink}
          className="inline-block py-3.5 px-8 text-lg font-semibold text-white bg-gradient-to-r from-[#51a684] to-[#115748] rounded-lg no-underline transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg shadow-md"
        >
          {ctaText}
        </a>
      )}
    </div>
  );
}
