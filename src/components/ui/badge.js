import React from 'react';

export function Badge({ className = '', variant, ...props }) {
  const base = 'inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium';
  const variants = {
    default: 'bg-slate-900 text-white',
    outline: 'border border-slate-300 text-slate-700 bg-white',
  };
  const v = variant ? (variants[variant] || variants.default) : variants.default;
  return <span className={`${base} ${v} ${className}`} {...props} />;
}
