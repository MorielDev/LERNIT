import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  primary: boolean;
}

export default function Button({ children, primary }: ButtonProps) {
  return (
    <button
      type="button"
      className={
        primary
          ? `focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2`
          : 'text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'
      }
    >
      {children}
    </button>
  );
}