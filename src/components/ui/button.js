import React from 'react';

export function Button({ className = '', variant, ...props }) {
  const base = 'inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-medium transition focus:outline-none focus:ring';
  const variants = {
    default: 'bg-sky-600 hover:bg-sky-700 text-white',
    outline: 'border border-slate-300 bg-white text-slate-900 hover:bg-slate-50',
    ghost: 'hover:bg-slate-100 text-slate-800',
  };
  const v = variant ? (variants[variant] || '') : variants.default;
  return <button className={`${base} ${v} ${className}`} {...props} />;
}
