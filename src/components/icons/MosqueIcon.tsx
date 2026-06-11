import React from 'react';

export function MosqueIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M2 20h20" />
      <path d="M7 20v-5a5 5 0 0 1 10 0v5" />
      <path d="M12 7V3" />
      <path d="M12 3a2 2 0 0 1 2 2 2 2 0 0 1-2 2 2 2 0 0 1-2-2 2 2 0 0 1 2-2z" />
      <path d="M4 20v-7a3 3 0 0 1 6 0v7" />
      <path d="M14 20v-7a3 3 0 0 1 6 0v7" />
    </svg>
  );
}
