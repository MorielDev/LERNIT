import { SecondaryButtonProps } from '@/app/data/list';
import React from 'react';

export default function SecondaryButton({ placeholder, primary, children, onClick }: SecondaryButtonProps) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={
                primary
                    ? `focus:outline-none text-white bg-primary hover:bg-primary focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-xs md:text-xs lg:text-xs xl:text-sm 2xl:text-sm px-2 md:px-2 lg:px-2 xl:px-5 2xl:px-5 py-2.5 mb-2 flex flex-row gap-1`
                    : 'text-primary hover:text-white border border-primary hover:bg-primary-20 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-xs md:text-xs lg:text-xs xl:text-sm 2xl:text-sm px-2 md:px-2 lg:px-2 xl:px-5 2xl:px-5 py-2.5 text-center me-2 mb-2 flex flex-row gap-1'
            }
        >
            <h1> {placeholder} </h1>
            {children}
        </button>
    );
}