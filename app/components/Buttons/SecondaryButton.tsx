import { SecondaryButtonProps } from '@/app/data/list';
import React from 'react';

export default function SecondaryButton({ placeholder, primary, children }: SecondaryButtonProps) {
    return (
        <button
            type="button"
            className={
                primary
                    ? `focus:outline-none text-white bg-primary hover:bg-primary focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 flex flex-row gap-1`
                    : 'text-primary hover:text-white border border-primary hover:bg-primary-20 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 flex flex-row gap-1'
            }
        >
            <h1> {placeholder} </h1>
            {children}
        </button>
    );
}