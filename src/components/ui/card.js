import React from 'react';

export function Card({ className = '', ...props }) {
  return <div className={`bg-white border rounded-xl ${className}`} {...props} />;
}
export function CardHeader({ className = '', ...props }) {
  return <div className={`p-4 ${className}`} {...props} />;
}
export function CardTitle({ className = '', ...props }) {
  return <div className={`text-xl font-semibold ${className}`} {...props} />;
} 
export function CardContent({ className = '', ...props }) {
  return <div className={`p-4 ${className}`} {...props} />;
}
export function CardFooter({ className = '', ...props }) {
  return <div className={`p-4 ${className}`} {...props} />;
}
