import React from 'react';

export function Textarea({ className = '', ...props }) {
  return <textarea className={`w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:ring focus:ring-sky-100 ${className}`} {...props} />;
}
