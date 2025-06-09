"use client"

import React from 'react'
import Link from 'next/link'

import { cn } from '@/lib/utils'

interface HighlightedWordProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
}

export function HighlightedWord({ children, href, className = '', target }: HighlightedWordProps) {
  const baseStyles = "inline-block border-b-2 border-primary rounded px-2 font-light italic text-foreground bg-background mr-1";

  if (href) {
    return (
      <Link 
        href={href} 
        className={cn(baseStyles, className)} 
        target={target}
        rel={target === '_blank' ? "noopener noreferrer" : undefined}
      >
        {children}
      </Link>
    );
  }

  return (
    <span className={cn(baseStyles, className)} >
      {children}
    </span>
  );
}
