"use client"

import React from 'react'
import Link from 'next/link'

interface HighlightedWordProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
}

export function HighlightedWord({ children, href, className = '', target }: HighlightedWordProps) {
  const baseStyles = "inline-block border-b-2 border-primary rounded px-2 font-light italic text-foreground bg-background mr-1";
  const combinedClassName = `${baseStyles} ${className}`;

  if (href) {
    return (
      <Link 
        href={href} 
        className={combinedClassName} 
        target={target}
        rel={target === '_blank' ? "noopener noreferrer" : undefined}
      >
        {children}
      </Link>
    );
  }

  return (
    <span className={combinedClassName}>
      {children}
    </span>
  );
}
