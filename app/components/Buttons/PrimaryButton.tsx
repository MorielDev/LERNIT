import React from 'react';

interface PrimaryButtonProps {
    placeholder: React.ReactNode;
    primary: boolean;
}

export default function PrimaryButton({ placeholder, primary }: PrimaryButtonProps) {
    return (
        <button
            type="button"
            className={
                primary
                    ? `focus:outline-none text-white bg-primary hover:bg-primary focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2`
                    : 'text-primary hover:text-white border border-primary hover:bg-primary-20 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'
            }
        >
            <h1> {placeholder} </h1>
        </button>
    );
}